import "dotenv/config";
import cors from "cors";
import express from "express";
import session from "express-session";
import helmet from "helmet";
import morgan from "morgan";
import passport from "./config/passport.js";
import prisma from "./config/prisma.js";
import sessionConfig from "./config/session.js";
import { generalLimiter } from "./middleware/rateLimiter.js";
import adminRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import classRoutes from "./routes/class.js";
import filterRoutes from "./routes/filter.js";
import progressRoutes from "./routes/progress.js";
import logger from "./utils/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Trust proxy (behind nginx)
app.set("trust proxy", 1);

// Security headers
app.use(helmet());

// CORS
app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:5173",
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
	}),
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging
app.use(
	morgan("dev", {
		stream: { write: (message) => logger.info(message.trim()) },
	}),
);

// Rate limiting
app.use("/api/", generalLimiter);

// Session
app.use(session(sessionConfig));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Health check
app.get("/api/health", (req, res) => {
	res.json({
		status: "ok",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
	});
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/filters", filterRoutes);

// 404 handler
app.use((req, res) => {
	res.status(404).json({ message: "Endpoint not found" });
});

// Global error handler
app.use((err, req, res, next) => {
	logger.error("Unhandled error:", err);

	const statusCode = err.statusCode || 500;
	const message =
		process.env.NODE_ENV === "production"
			? "Internal server error"
			: err.message;

	res.status(statusCode).json({
		message,
		...(process.env.NODE_ENV === "development" && { stack: err.stack }),
	});
});

// Graceful shutdown
async function shutdown() {
	logger.info("Shutting down server...");
	await prisma.$disconnect();
	process.exit(0);
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Start server
app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
	logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
	logger.info(
		`Client URL: ${process.env.CLIENT_URL || "http://localhost:5173"}`,
	);
});

export default app;
