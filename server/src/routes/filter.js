import { Router } from "express";
import { filterController } from "../controllers/filterController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = Router();

// All routes require authentication
router.use(isAuthenticated);

// GET /api/filters - Get all filters for current user
router.get("/", filterController.getAll);

// POST /api/filters - Create new filter
router.post("/", filterController.create);

// PUT /api/filters/:id - Update filter
router.put("/:id", filterController.update);

// DELETE /api/filters/:id - Delete filter
router.delete("/:id", filterController.delete);

export default router;
