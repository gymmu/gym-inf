import { Router } from "express";
import { adminController } from "../controllers/adminController.js";
import { hasRole, isAuthenticated } from "../middleware/auth.js";

const router = Router();

// All routes require authentication and ADMIN role
router.use(isAuthenticated);
router.use(hasRole("ADMIN"));

// GET /api/admin/progress - Get all users with their progress
router.get("/progress", adminController.getAllUsersProgress);

// GET /api/admin/progress/:userId - Get specific user's progress
router.get("/progress/:userId", adminController.getUserProgress);

// GET /api/admin/stats - Get overall statistics
router.get("/stats", adminController.getStats);

export default router;
