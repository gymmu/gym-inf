import prisma from "../config/prisma.js";
import logger from "../utils/logger.js";

export const filterController = {
	// GET /api/filters - Get all filters for current user
	async getAll(req, res) {
		try {
			const filters = await prisma.chapterFilter.findMany({
				where: { userId: req.user.id },
				orderBy: { updatedAt: "desc" },
			});

			res.json({ filters });
		} catch (error) {
			logger.error("Get filters error:", error);
			res.status(500).json({ message: "Failed to fetch filters" });
		}
	},

	// POST /api/filters - Create new filter
	async create(req, res) {
		try {
			const { name, chapters } = req.body;

			if (!name || typeof name !== "string" || name.trim().length === 0) {
				return res.status(400).json({ message: "Filter name is required" });
			}

			if (!Array.isArray(chapters)) {
				return res.status(400).json({ message: "Chapters must be an array" });
			}

			const filter = await prisma.chapterFilter.create({
				data: {
					userId: req.user.id,
					name: name.trim(),
					chapters,
				},
			});

			res.status(201).json({ filter });
		} catch (error) {
			logger.error("Create filter error:", error);
			res.status(500).json({ message: "Failed to create filter" });
		}
	},

	// PUT /api/filters/:id - Update filter
	async update(req, res) {
		try {
			const { id } = req.params;
			const { name, chapters } = req.body;
			const filterId = parseInt(id, 10);

			if (isNaN(filterId)) {
				return res.status(400).json({ message: "Invalid filter ID" });
			}

			// Verify filter belongs to user
			const existingFilter = await prisma.chapterFilter.findUnique({
				where: { id: filterId },
			});

			if (!existingFilter) {
				return res.status(404).json({ message: "Filter not found" });
			}

			if (existingFilter.userId !== req.user.id) {
				return res.status(403).json({ message: "Access denied" });
			}

			const updateData = {};
			if (name !== undefined) updateData.name = name.trim();
			if (chapters !== undefined) {
				if (!Array.isArray(chapters)) {
					return res.status(400).json({ message: "Chapters must be an array" });
				}
				updateData.chapters = chapters;
			}

			const filter = await prisma.chapterFilter.update({
				where: { id: filterId },
				data: updateData,
			});

			res.json({ filter });
		} catch (error) {
			logger.error("Update filter error:", error);
			res.status(500).json({ message: "Failed to update filter" });
		}
	},

	// DELETE /api/filters/:id - Delete filter
	async delete(req, res) {
		try {
			const { id } = req.params;
			const filterId = parseInt(id, 10);

			if (isNaN(filterId)) {
				return res.status(400).json({ message: "Invalid filter ID" });
			}

			// Verify filter belongs to user
			const existingFilter = await prisma.chapterFilter.findUnique({
				where: { id: filterId },
			});

			if (!existingFilter) {
				return res.status(404).json({ message: "Filter not found" });
			}

			if (existingFilter.userId !== req.user.id) {
				return res.status(403).json({ message: "Access denied" });
			}

			await prisma.chapterFilter.delete({
				where: { id: filterId },
			});

			res.json({ message: "Filter deleted successfully" });
		} catch (error) {
			logger.error("Delete filter error:", error);
			res.status(500).json({ message: "Failed to delete filter" });
		}
	},
};
