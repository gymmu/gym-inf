import prisma from "../config/prisma.js";
import logger from "../utils/logger.js";

export const classController = {
	// GET /api/classes - Get all classes
	async getAll(req, res) {
		try {
			const classes = await prisma.class.findMany({
				include: {
					_count: {
						select: { users: true },
					},
				},
				orderBy: {
					name: "asc",
				},
			});

			res.json({ classes });
		} catch (error) {
			logger.error("Get classes error:", error);
			res.status(500).json({ message: "Failed to fetch classes" });
		}
	},

	// POST /api/classes - Create new class (Admin only)
	async create(req, res) {
		try {
			const { name } = req.body;

			if (!name || typeof name !== "string" || name.trim().length === 0) {
				return res.status(400).json({ message: "Class name is required" });
			}

			const existingClass = await prisma.class.findUnique({
				where: { name: name.trim() },
			});

			if (existingClass) {
				return res
					.status(409)
					.json({ message: "Class with this name already exists" });
			}

			const newClass = await prisma.class.create({
				data: {
					name: name.trim(),
				},
			});

			res.status(201).json({ class: newClass });
		} catch (error) {
			logger.error("Create class error:", error);
			res.status(500).json({ message: "Failed to create class" });
		}
	},

	// DELETE /api/classes/:id - Delete class (Admin only)
	async delete(req, res) {
		try {
			const { id } = req.params;
			const classId = parseInt(id, 10);

			if (isNaN(classId)) {
				return res.status(400).json({ message: "Invalid class ID" });
			}

			const existingClass = await prisma.class.findUnique({
				where: { id: classId },
			});

			if (!existingClass) {
				return res.status(404).json({ message: "Class not found" });
			}

			await prisma.class.delete({
				where: { id: classId },
			});

			res.json({ message: "Class deleted successfully" });
		} catch (error) {
			logger.error("Delete class error:", error);
			res.status(500).json({ message: "Failed to delete class" });
		}
	},

	// GET /api/classes/:id/users - Get all users in a class with progress
	async getClassUsers(req, res) {
		try {
			const { id } = req.params;
			const classId = parseInt(id, 10);

			if (isNaN(classId)) {
				return res.status(400).json({ message: "Invalid class ID" });
			}

			const classData = await prisma.class.findUnique({
				where: { id: classId },
				include: {
					users: {
						select: {
							id: true,
							email: true,
							role: true,
							isVerified: true,
							profile: {
								select: {
									firstName: true,
									lastName: true,
								},
							},
							chapterProgress: {
								select: {
									chapterSlug: true,
									understandingLevel: true,
									updatedAt: true,
								},
								orderBy: {
									updatedAt: "desc",
								},
							},
						},
						orderBy: {
							email: "asc",
						},
					},
				},
			});

			if (!classData) {
				return res.status(404).json({ message: "Class not found" });
			}

			// Transform to frontend-friendly format
			const usersWithProgress = classData.users.map((user) => {
				const progressMap = {};
				for (const progress of user.chapterProgress) {
					progressMap[progress.chapterSlug] = {
						level: progress.understandingLevel,
						updatedAt: progress.updatedAt,
					};
				}

				return {
					id: user.id,
					email: user.email,
					role: user.role,
					isVerified: user.isVerified,
					name: user.profile
						? `${user.profile.firstName || ""} ${user.profile.lastName || ""}`.trim()
						: null,
					progress: progressMap,
					totalChapters: user.chapterProgress.length,
				};
			});

			res.json({
				class: {
					id: classData.id,
					name: classData.name,
				},
				users: usersWithProgress,
			});
		} catch (error) {
			logger.error("Get class users error:", error);
			res.status(500).json({ message: "Failed to fetch class users" });
		}
	},

	// PATCH /api/users/:userId/class - Assign user to class
	async assignUserToClass(req, res) {
		try {
			const { userId } = req.params;
			const { classId } = req.body;

			const userIdInt = parseInt(userId, 10);
			const classIdInt = classId ? parseInt(classId, 10) : null;

			if (isNaN(userIdInt)) {
				return res.status(400).json({ message: "Invalid user ID" });
			}

			// Verify user exists
			const user = await prisma.user.findUnique({
				where: { id: userIdInt },
			});

			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}

			// If classId provided, verify class exists
			if (classIdInt !== null) {
				const classExists = await prisma.class.findUnique({
					where: { id: classIdInt },
				});

				if (!classExists) {
					return res.status(404).json({ message: "Class not found" });
				}
			}

			// Update user's class
			const updatedUser = await prisma.user.update({
				where: { id: userIdInt },
				data: {
					classId: classIdInt,
				},
				include: {
					class: true,
				},
			});

			res.json({
				user: {
					id: updatedUser.id,
					email: updatedUser.email,
					classId: updatedUser.classId,
					className: updatedUser.class?.name || null,
				},
			});
		} catch (error) {
			logger.error("Assign user to class error:", error);
			res.status(500).json({ message: "Failed to assign user to class" });
		}
	},
};
