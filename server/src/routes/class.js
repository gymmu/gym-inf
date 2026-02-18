import { Router } from "express";
import { classController } from "../controllers/classController.js";
import { hasRole, isAuthenticated } from "../middleware/auth.js";

const router = Router();

// Public routes (authenticated users can see classes)
router.get("/", isAuthenticated, classController.getAll);

// Admin-only routes
router.post("/", isAuthenticated, hasRole("ADMIN"), classController.create);
router.delete(
	"/:id",
	isAuthenticated,
	hasRole("ADMIN"),
	classController.delete,
);
router.get(
	"/:id/users",
	isAuthenticated,
	hasRole("ADMIN"),
	classController.getClassUsers,
);

// User class assignment (Admin only)
router.patch(
	"/users/:userId/class",
	isAuthenticated,
	hasRole("ADMIN"),
	classController.assignUserToClass,
);

export default router;
