import prisma from "../config/prisma.js";
import { UserModel } from "../models/user.js";
import logger from "../utils/logger.js";

export const adminController = {
	// GET /api/admin/progress - Get all users with their chapter progress
	async getAllUsersProgress(req, res) {
		try {
			const users = await prisma.user.findMany({
				select: {
					id: true,
					email: true,
					role: true,
					isVerified: true,
					createdAt: true,
					classId: true,
					class: {
						select: {
							id: true,
							name: true,
						},
					},
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
			});

			// Transform to a more frontend-friendly format
			const usersWithProgress = users.map((user) => {
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
					createdAt: user.createdAt,
					classId: user.classId,
					className: user.class?.name || null,
					name: user.profile
						? `${user.profile.firstName || ""} ${user.profile.lastName || ""}`.trim()
						: null,
					progress: progressMap,
					totalChapters: user.chapterProgress.length,
				};
			});

			res.json({ users: usersWithProgress });
		} catch (error) {
			logger.error("Get all users progress error:", error);
			res.status(500).json({ message: "Failed to fetch users progress" });
		}
	},

	// GET /api/admin/progress/:userId - Get specific user's progress
	async getUserProgress(req, res) {
		try {
			const { userId } = req.params;

			const user = await prisma.user.findUnique({
				where: { id: parseInt(userId, 10) },
				select: {
					id: true,
					email: true,
					role: true,
					isVerified: true,
					createdAt: true,
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
			});

			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}

			const progressMap = {};
			for (const progress of user.chapterProgress) {
				progressMap[progress.chapterSlug] = {
					level: progress.understandingLevel,
					updatedAt: progress.updatedAt,
				};
			}

			res.json({
				user: {
					id: user.id,
					email: user.email,
					role: user.role,
					isVerified: user.isVerified,
					createdAt: user.createdAt,
					name: user.profile
						? `${user.profile.firstName || ""} ${user.profile.lastName || ""}`.trim()
						: null,
					progress: progressMap,
					totalChapters: user.chapterProgress.length,
				},
			});
		} catch (error) {
			logger.error("Get user progress error:", error);
			res.status(500).json({ message: "Failed to fetch user progress" });
		}
	},

	// GET /api/admin/stats - Get overall statistics
	async getStats(req, res) {
		try {
			const [totalUsers, totalProgress, usersByRole] = await Promise.all([
				prisma.user.count(),
				prisma.chapterProgress.count(),
				prisma.user.groupBy({
					by: ["role"],
					_count: true,
				}),
			]);

			// Get chapter completion stats
			const chapterStats = await prisma.chapterProgress.groupBy({
				by: ["chapterSlug", "understandingLevel"],
				_count: true,
			});

			// Transform chapter stats
			const chapterStatsMap = {};
			for (const stat of chapterStats) {
				if (!chapterStatsMap[stat.chapterSlug]) {
					chapterStatsMap[stat.chapterSlug] = {
						red: 0,
						yellow: 0,
						green: 0,
						total: 0,
					};
				}
				const level = stat.understandingLevel;
				if (level === 1) chapterStatsMap[stat.chapterSlug].red = stat._count;
				if (level === 2) chapterStatsMap[stat.chapterSlug].yellow = stat._count;
				if (level === 3) chapterStatsMap[stat.chapterSlug].green = stat._count;
				chapterStatsMap[stat.chapterSlug].total += stat._count;
			}

			res.json({
				totalUsers,
				totalProgress,
				usersByRole: usersByRole.reduce((acc, item) => {
					acc[item.role] = item._count;
					return acc;
				}, {}),
				chapterStats: chapterStatsMap,
			});
		} catch (error) {
			logger.error("Get stats error:", error);
			res.status(500).json({ message: "Failed to fetch statistics" });
		}
	},

	// PATCH /api/admin/users/:userId/profile - Update user profile (Admin only)
	async updateUserProfile(req, res) {
		try {
			const { userId } = req.params;
			const { firstName, lastName } = req.body;
			const userIdInt = parseInt(userId, 10);

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

			const profileData = {};
			if (firstName !== undefined)
				profileData.firstName = firstName?.trim() || null;
			if (lastName !== undefined)
				profileData.lastName = lastName?.trim() || null;

			const profile = await UserModel.updateProfile(userIdInt, profileData);

			res.json({
				profile,
			});
		} catch (error) {
			logger.error("Update user profile error:", error);
			res.status(500).json({ message: "Failed to update user profile" });
		}
	},
};
