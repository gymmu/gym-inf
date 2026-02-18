import prisma from "../config/prisma.js";
import logger from "../utils/logger.js";

export const progressController = {
	// GET /api/progress - Get all chapter progress for current user
	async getAll(req, res) {
		try {
			const progress = await prisma.chapterProgress.findMany({
				where: { userId: req.user.id },
				select: {
					chapterSlug: true,
					understandingLevel: true,
				},
			});

			// Return as a map for easy lookup: { "js-variables": 3, "fms/internet": 1 }
			const progressMap = {};
			for (const p of progress) {
				progressMap[p.chapterSlug] = p.understandingLevel;
			}

			res.json({ progress: progressMap });
		} catch (error) {
			logger.error("Get progress error:", error);
			res.status(500).json({ message: "Failed to fetch progress" });
		}
	},

	// POST /api/progress/:chapterSlug - Set/update understanding level for a chapter
	async update(req, res) {
		try {
			const { chapterSlug } = req.params;
			const { level } = req.body;

			// Validate level
			if (![1, 2, 3].includes(level)) {
				return res.status(400).json({
					message: "Invalid understanding level. Must be 1, 2, or 3.",
				});
			}

			// Validate chapterSlug
			if (!chapterSlug || typeof chapterSlug !== "string") {
				return res.status(400).json({ message: "Invalid chapter slug." });
			}

			const progress = await prisma.chapterProgress.upsert({
				where: {
					userId_chapterSlug: {
						userId: req.user.id,
						chapterSlug,
					},
				},
				update: {
					understandingLevel: level,
				},
				create: {
					userId: req.user.id,
					chapterSlug,
					understandingLevel: level,
				},
			});

			res.json({
				chapterSlug: progress.chapterSlug,
				level: progress.understandingLevel,
			});
		} catch (error) {
			logger.error("Update progress error:", error);
			res.status(500).json({ message: "Failed to update progress" });
		}
	},

	// DELETE /api/progress/:chapterSlug - Remove understanding level for a chapter
	async remove(req, res) {
		try {
			const { chapterSlug } = req.params;

			await prisma.chapterProgress.deleteMany({
				where: {
					userId: req.user.id,
					chapterSlug,
				},
			});

			res.json({ message: "Progress removed" });
		} catch (error) {
			logger.error("Remove progress error:", error);
			res.status(500).json({ message: "Failed to remove progress" });
		}
	},
};
