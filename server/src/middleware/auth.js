import { ForbiddenError, UnauthorizedError } from "../utils/errors.js";

export function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	return res.status(401).json({ message: "Authentication required" });
}

export function hasRole(...roles) {
	return (req, res, next) => {
		if (!req.isAuthenticated()) {
			return res.status(401).json({ message: "Authentication required" });
		}

		if (!roles.includes(req.user.role)) {
			return res.status(403).json({ message: "Insufficient permissions" });
		}

		return next();
	};
}

export function isVerified(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).json({ message: "Authentication required" });
	}

	if (!req.user.isVerified) {
		return res.status(403).json({ message: "Email verification required" });
	}

	return next();
}
