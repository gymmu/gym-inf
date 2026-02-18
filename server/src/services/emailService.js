import { getEmailClient } from "../config/email.js";
import logger from "../utils/logger.js";

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const FROM_EMAIL =
	process.env.MAILGUN_FROM || process.env.GMAIL_USER || "noreply@localhost";

export async function sendVerificationEmail(email, token) {
	const emailClient = getEmailClient();
	const verificationUrl = `${CLIENT_URL}/verify-email/${token}`;

	const emailOptions = {
		from: FROM_EMAIL,
		to: email,
		subject: "E-Mail-Adresse verifizieren - Gym Inf",
		html: `
      <div style="font-family: 'Noto Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>E-Mail-Adresse verifizieren</h2>
        <p>Vielen Dank f&uuml;r Ihre Registrierung bei Gym Inf.</p>
        <p>Bitte klicken Sie auf den folgenden Link, um Ihre E-Mail-Adresse zu verifizieren:</p>
        <p>
          <a href="${verificationUrl}"
             style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px;">
            E-Mail verifizieren
          </a>
        </p>
        <p>Oder kopieren Sie diesen Link in Ihren Browser:</p>
        <p style="word-break: break-all; color: #6b7280;">${verificationUrl}</p>
        <p style="color: #6b7280; font-size: 14px;">Dieser Link ist 24 Stunden g&uuml;ltig.</p>
      </div>
    `,
	};

	try {
		const result = await emailClient.sendEmail(emailOptions);
		logger.info(`Verification email sent to ${email}: ${result.messageId}`);
		return result;
	} catch (error) {
		logger.error(`Failed to send verification email to ${email}:`, error);
		throw error;
	}
}

export async function sendPasswordResetEmail(email, token) {
	const emailClient = getEmailClient();
	const resetUrl = `${CLIENT_URL}/reset-password/${token}`;

	const emailOptions = {
		from: FROM_EMAIL,
		to: email,
		subject: "Passwort zur&uuml;cksetzen - Gym Inf",
		html: `
      <div style="font-family: 'Noto Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Passwort zur&uuml;cksetzen</h2>
        <p>Sie haben angefordert, Ihr Passwort zur&uuml;ckzusetzen.</p>
        <p>Bitte klicken Sie auf den folgenden Link:</p>
        <p>
          <a href="${resetUrl}"
             style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px;">
            Passwort zur&uuml;cksetzen
          </a>
        </p>
        <p>Oder kopieren Sie diesen Link in Ihren Browser:</p>
        <p style="word-break: break-all; color: #6b7280;">${resetUrl}</p>
        <p style="color: #6b7280; font-size: 14px;">Dieser Link ist 1 Stunde g&uuml;ltig.</p>
        <p style="color: #6b7280; font-size: 14px;">
          Falls Sie diese Anfrage nicht gestellt haben, k&ouml;nnen Sie diese E-Mail ignorieren.
        </p>
      </div>
    `,
	};

	try {
		const result = await emailClient.sendEmail(emailOptions);
		logger.info(`Password reset email sent to ${email}: ${result.messageId}`);
		return result;
	} catch (error) {
		logger.error(`Failed to send password reset email to ${email}:`, error);
		throw error;
	}
}
