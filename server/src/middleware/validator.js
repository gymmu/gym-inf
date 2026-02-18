import { body, validationResult } from "express-validator";

export function handleValidationErrors(req, res, next) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			message: "Validation failed",
			errors: errors.array().map((err) => ({
				field: err.path,
				message: err.msg,
			})),
		});
	}
	next();
}

export const registerValidation = [
	body("email")
		.isEmail()
		.withMessage("Please provide a valid email address")
		.normalizeEmail(),
	body("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long")
		.matches(/\d/)
		.withMessage("Password must contain at least one number"),
	handleValidationErrors,
];

export const loginValidation = [
	body("email")
		.isEmail()
		.withMessage("Please provide a valid email address")
		.normalizeEmail(),
	body("password").notEmpty().withMessage("Password is required"),
	handleValidationErrors,
];

export const forgotPasswordValidation = [
	body("email")
		.isEmail()
		.withMessage("Please provide a valid email address")
		.normalizeEmail(),
	handleValidationErrors,
];

export const resetPasswordValidation = [
	body("token").notEmpty().withMessage("Reset token is required"),
	body("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long")
		.matches(/\d/)
		.withMessage("Password must contain at least one number"),
	handleValidationErrors,
];
