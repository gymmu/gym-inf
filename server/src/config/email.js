import nodemailer from "nodemailer";
import logger from "../utils/logger.js";

let transporter = null;

function createTransporter() {
	if (transporter) return transporter;

	// Use Mailgun SMTP if configured
	if (process.env.MAILGUN_SMTP_HOST) {
		transporter = nodemailer.createTransport({
			host: process.env.MAILGUN_SMTP_HOST,
			port: parseInt(process.env.MAILGUN_SMTP_PORT) || 587,
			secure: false,
			auth: {
				user: process.env.MAILGUN_SMTP_USER,
				pass: process.env.MAILGUN_SMTP_PASS,
			},
		});
		logger.info("Email transporter configured with Mailgun SMTP");
		return transporter;
	}

	// Use Gmail as fallback
	if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
		transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
		});
		logger.info("Email transporter configured with Gmail");
		return transporter;
	}

	// Development: log emails to console
	logger.warn("No email service configured. Emails will be logged to console.");
	transporter = {
		sendMail: async (mailOptions) => {
			logger.info("--- DEV EMAIL ---");
			logger.info(`To: ${mailOptions.to}`);
			logger.info(`Subject: ${mailOptions.subject}`);
			logger.info(`Body: ${mailOptions.html || mailOptions.text}`);
			logger.info("--- END EMAIL ---");
			return { messageId: "dev-" + Date.now() };
		},
	};
	return transporter;
}

export function getTransporter() {
	return createTransporter();
}

export default { getTransporter };
