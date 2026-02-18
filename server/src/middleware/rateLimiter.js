import rateLimit from "express-rate-limit";

const isDev = process.env.NODE_ENV === "development";

export const authLimiter = rateLimit({
	windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
	max: isDev ? 100 : parseInt(process.env.RATE_LIMIT_MAX) || 10,
	message: {
		message: "Too many attempts. Please try again later.",
	},
	standardHeaders: true,
	legacyHeaders: false,
});

export const generalLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: {
		message: "Too many requests. Please try again later.",
	},
	standardHeaders: true,
	legacyHeaders: false,
});
