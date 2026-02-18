import { Router } from "express";
import { progressController } from "../controllers/progressController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = Router();

// All routes require authentication
router.use(isAuthenticated);

// GET /api/progress - Get all chapter progress for current user
router.get("/", progressController.getAll);

// POST /api/progress/:chapterSlug - Set/update understanding level
router.post("/:chapterSlug(*)", progressController.update);

// DELETE /api/progress/:chapterSlug - Remove progress entry
router.delete("/:chapterSlug(*)", progressController.remove);

export default router;
