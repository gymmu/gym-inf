import bcrypt from "bcryptjs";
import crypto from "crypto";
import prisma from "../config/prisma.js";

const userSelectPublic = {
	id: true,
	email: true,
	role: true,
	isVerified: true,
	createdAt: true,
	profile: true,
};

export const UserModel = {
	async create({ email, password, role = "USER" }) {
		const passwordHash = await bcrypt.hash(password, 10);
		const verificationToken = crypto.randomBytes(32).toString("hex");
		const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

		return prisma.user.create({
			data: {
				email: email.toLowerCase().trim(),
				password: passwordHash,
				role,
				verificationToken,
				verificationTokenExpires,
			},
			select: {
				...userSelectPublic,
				verificationToken: true,
			},
		});
	},

	async findByEmail(email) {
		return prisma.user.findUnique({
			where: { email: email.toLowerCase().trim() },
			include: { profile: true },
		});
	},

	async findById(id) {
		return prisma.user.findUnique({
			where: { id },
			include: { profile: true },
		});
	},

	async verifyPassword(plainPassword, hashedPassword) {
		return bcrypt.compare(plainPassword, hashedPassword);
	},

	async verifyEmail(token) {
		const user = await prisma.user.findUnique({
			where: { verificationToken: token },
		});

		if (!user || !user.verificationTokenExpires) {
			return null;
		}

		if (user.verificationTokenExpires < new Date()) {
			return null;
		}

		return prisma.user.update({
			where: { id: user.id },
			data: {
				isVerified: true,
				verificationToken: null,
				verificationTokenExpires: null,
			},
			select: userSelectPublic,
		});
	},

	async generateVerificationToken(userId) {
		const verificationToken = crypto.randomBytes(32).toString("hex");
		const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

		await prisma.user.update({
			where: { id: userId },
			data: {
				verificationToken,
				verificationTokenExpires,
			},
		});

		return verificationToken;
	},

	async generatePasswordResetToken(email) {
		const user = await prisma.user.findUnique({
			where: { email: email.toLowerCase().trim() },
		});

		if (!user) {
			return null;
		}

		const resetToken = crypto.randomBytes(32).toString("hex");
		const resetExpires = new Date(Date.now() + 60 * 60 * 1000);

		await prisma.user.update({
			where: { id: user.id },
			data: {
				resetPasswordToken: resetToken,
				resetPasswordExpires: resetExpires,
			},
		});

		return { token: resetToken, email: user.email };
	},

	async resetPassword(token, newPassword) {
		const user = await prisma.user.findUnique({
			where: { resetPasswordToken: token },
		});

		if (!user || !user.resetPasswordExpires) {
			return null;
		}

		if (user.resetPasswordExpires < new Date()) {
			return null;
		}

		const passwordHash = await bcrypt.hash(newPassword, 10);

		return prisma.user.update({
			where: { id: user.id },
			data: {
				password: passwordHash,
				resetPasswordToken: null,
				resetPasswordExpires: null,
			},
			select: userSelectPublic,
		});
	},

	async updateProfile(userId, profileData) {
		return prisma.userProfile.upsert({
			where: { userId },
			update: profileData,
			create: {
				userId,
				...profileData,
			},
		});
	},

	async findAll({ skip = 0, take = 20, role } = {}) {
		const where = role ? { role } : {};

		return prisma.user.findMany({
			where,
			skip,
			take,
			select: userSelectPublic,
			orderBy: { createdAt: "desc" },
		});
	},

	async delete(id) {
		return prisma.user.delete({ where: { id } });
	},
};
