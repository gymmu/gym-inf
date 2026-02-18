import { Router } from "express";
import { authController } from "../controllers/authController.js";
import { isAuthenticated } from "../middleware/auth.js";
import { authLimiter } from "../middleware/rateLimiter.js";
import {
	forgotPasswordValidation,
	loginValidation,
	registerValidation,
	resetPasswordValidation,
} from "../middleware/validator.js";

const router = Router();

// Public routes
router.post(
	"/register",
	authLimiter,
	registerValidation,
	authController.register,
);

router.post("/login", authLimiter, loginValidation, authController.login);

router.get("/verify-email/:token", authController.verifyEmail);

router.post(
	"/forgot-password",
	authLimiter,
	forgotPasswordValidation,
	authController.forgotPassword,
);

router.post(
	"/reset-password",
	authLimiter,
	resetPasswordValidation,
	authController.resetPassword,
);

// Session check (public, returns auth status)
router.get("/check", authController.check);

// Protected routes
router.post("/logout", isAuthenticated, authController.logout);

router.get("/me", isAuthenticated, authController.me);

router.post(
	"/resend-verification",
	isAuthenticated,
	authController.resendVerification,
);

export default router;
