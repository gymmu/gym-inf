import nodemailer from "nodemailer";
import { Resend } from "resend";
import logger from "../utils/logger.js";

let emailClient = null;

function createEmailClient() {
	if (emailClient) return emailClient;

	// Use Resend API if configured
	if (process.env.RESEND_API_KEY) {
		const resend = new Resend(process.env.RESEND_API_KEY);

		emailClient = {
			sendEmail: async ({ from, to, subject, html, text }) => {
				try {
					const result = await resend.emails.send({
						from: from || process.env.RESEND_FROM || "onboarding@resend.dev",
						to: Array.isArray(to) ? to : [to],
						subject,
						html,
						text,
					});
					logger.info(`Email sent via Resend: ${result.data?.id || result.id}`);
					return { messageId: result.data?.id || result.id };
				} catch (error) {
					logger.error("Resend API error:", error);
					throw error;
				}
			},
		};
		logger.info("Email client configured with Resend");
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
