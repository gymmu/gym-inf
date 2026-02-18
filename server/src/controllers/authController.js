import passport from "passport";
import { UserModel } from "../models/user.js";
import {
	sendPasswordResetEmail,
	sendVerificationEmail,
} from "../services/emailService.js";
import logger from "../utils/logger.js";

export const authController = {
	async register(req, res) {
		try {
			const { email, password } = req.body;

			const existingUser = await UserModel.findByEmail(email);
			if (existingUser) {
				return res
					.status(409)
					.json({ message: "An account with this email already exists" });
			}

			const user = await UserModel.create({ email, password });

			try {
				await sendVerificationEmail(user.email, user.verificationToken);
			} catch (emailError) {
				logger.error("Failed to send verification email:", emailError);
				// Registration still succeeds, user can request new verification email
			}

			res.status(201).json({
				message:
					"Registration successful. Please check your email to verify your account.",
				user: {
					id: user.id,
					email: user.email,
				},
			});
		} catch (error) {
			logger.error("Registration error:", error);
			res.status(500).json({ message: "Registration failed" });
		}
	},

	login(req, res, next) {
		passport.authenticate("local", (err, user, info) => {
			if (err) {
				logger.error("Login error:", err);
				return res.status(500).json({ message: "Login failed" });
			}

			if (!user) {
				return res
					.status(401)
					.json({ message: info?.message || "Invalid email or password" });
			}

			req.logIn(user, (loginErr) => {
				if (loginErr) {
					logger.error("Session creation error:", loginErr);
					return res.status(500).json({ message: "Login failed" });
				}

				return res.json({
					message: "Login successful",
					user: {
						id: user.id,
						email: user.email,
						role: user.role,
						isVerified: user.isVerified,
						profile: user.profile,
					},
				});
			});
		})(req, res, next);
	},

	logout(req, res) {
		req.logout((err) => {
			if (err) {
				logger.error("Logout error:", err);
				return res.status(500).json({ message: "Logout failed" });
			}

			req.session.destroy((sessionErr) => {
				if (sessionErr) {
					logger.error("Session destroy error:", sessionErr);
				}
				res.clearCookie(process.env.SESSION_NAME || "gym-inf.sid");
				return res.json({ message: "Logout successful" });
			});
		});
	},

	async me(req, res) {
		if (!req.isAuthenticated()) {
			return res.status(401).json({ message: "Not authenticated" });
		}

		return res.json({
			user: {
				id: req.user.id,
				email: req.user.email,
				role: req.user.role,
				isVerified: req.user.isVerified,
				profile: req.user.profile,
			},
		});
	},

	async check(req, res) {
		return res.json({
			authenticated: req.isAuthenticated(),
			user: req.isAuthenticated()
				? {
						id: req.user.id,
						email: req.user.email,
						role: req.user.role,
						isVerified: req.user.isVerified,
					}
				: null,
		});
	},

	async verifyEmail(req, res) {
		try {
			const { token } = req.params;
			const user = await UserModel.verifyEmail(token);

			if (!user) {
				return res
					.status(400)
					.json({ message: "Invalid or expired verification token" });
			}

			res.json({
				message: "Email verified successfully",
				user: {
					id: user.id,
					email: user.email,
					isVerified: user.isVerified,
				},
			});
		} catch (error) {
			logger.error("Email verification error:", error);
			res.status(500).json({ message: "Email verification failed" });
		}
	},

	async resendVerification(req, res) {
		try {
			if (!req.isAuthenticated()) {
				return res.status(401).json({ message: "Authentication required" });
			}

			if (req.user.isVerified) {
				return res.json({ message: "Email is already verified" });
			}

			const token = await UserModel.generateVerificationToken(req.user.id);

			try {
				await sendVerificationEmail(req.user.email, token);
			} catch (emailError) {
				logger.error("Failed to resend verification email:", emailError);
				return res
					.status(500)
					.json({ message: "Failed to send verification email" });
			}

			res.json({ message: "Verification email sent" });
		} catch (error) {
			logger.error("Resend verification error:", error);
			res.status(500).json({ message: "Failed to resend verification email" });
		}
	},

	async forgotPassword(req, res) {
		try {
			const { email } = req.body;

			const result = await UserModel.generatePasswordResetToken(email);

			// Always return success to not reveal whether an email exists
			if (result) {
				try {
					await sendPasswordResetEmail(result.email, result.token);
				} catch (emailError) {
					logger.error("Failed to send password reset email:", emailError);
				}
			}

			res.json({
				message: "If the email exists, a password reset link has been sent.",
			});
		} catch (error) {
			logger.error("Forgot password error:", error);
			res.status(500).json({ message: "Password reset request failed" });
		}
	},

	async resetPassword(req, res) {
		try {
			const { token, password } = req.body;

			const user = await UserModel.resetPassword(token, password);

			if (!user) {
				return res
					.status(400)
					.json({ message: "Invalid or expired reset token" });
			}

			res.json({ message: "Password reset successful" });
		} catch (error) {
			logger.error("Reset password error:", error);
			res.status(500).json({ message: "Password reset failed" });
		}
	},
};
