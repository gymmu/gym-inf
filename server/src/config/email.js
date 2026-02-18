import FormData from "form-data";
import Mailgun from "mailgun.js";
import nodemailer from "nodemailer";
import logger from "../utils/logger.js";

let emailClient = null;

function createEmailClient() {
	if (emailClient) return emailClient;

	// Use Mailgun HTTP API if configured
	if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
		const mailgun = new Mailgun(FormData);
		const mg = mailgun.client({
			username: "api",
			key: process.env.MAILGUN_API_KEY,
			url: "https://api.mailgun.net", // US region
		});

		emailClient = {
			sendEmail: async ({ from, to, subject, html, text }) => {
				try {
					const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
						from,
						to: Array.isArray(to) ? to : [to],
						subject,
						html,
						text,
					});
					logger.info(`Email sent via Mailgun API: ${result.id}`);
					return { messageId: result.id, status: result.status };
				} catch (error) {
					logger.error("Mailgun API error:", error);
					throw error;
				}
			},
		};
		logger.info("Email client configured with Mailgun HTTP API");
		return emailClient;
	}

	// Use Gmail as fallback
	if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
		});

		emailClient = {
			sendEmail: async ({ from, to, subject, html, text }) => {
				const result = await transporter.sendMail({
					from,
					to,
					subject,
					html,
					text,
				});
				logger.info(`Email sent via Gmail: ${result.messageId}`);
				return { messageId: result.messageId };
			},
		};
		logger.info("Email client configured with Gmail");
		return emailClient;
	}

	// Development: log emails to console
	logger.warn("No email service configured. Emails will be logged to console.");
	emailClient = {
		sendEmail: async ({ from, to, subject, html, text }) => {
			logger.info("--- DEV EMAIL ---");
			logger.info(`From: ${from}`);
			logger.info(`To: ${to}`);
			logger.info(`Subject: ${subject}`);
			logger.info(`Body: ${html || text}`);
			logger.info("--- END EMAIL ---");
			return { messageId: "dev-" + Date.now() };
		},
	};
	return emailClient;
}

export function getEmailClient() {
	return createEmailClient();
}

export default { getEmailClient };
