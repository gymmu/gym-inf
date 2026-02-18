import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
	console.log("Seeding database...");

	const adminPassword = await bcrypt.hash("admin123", 10);
	const admin = await prisma.user.upsert({
		where: { email: "admin@example.com" },
		update: {},
		create: {
			email: "admin@example.com",
			password: adminPassword,
			role: "ADMIN",
			isVerified: true,
			profile: {
				create: {
					firstName: "Admin",
					lastName: "User",
				},
			},
		},
	});
	console.log("Created admin user:", admin.email);

	const userPassword = await bcrypt.hash("user123", 10);
	const user = await prisma.user.upsert({
		where: { email: "user@example.com" },
		update: {},
		create: {
			email: "user@example.com",
			password: userPassword,
			role: "USER",
			isVerified: true,
			profile: {
				create: {
					firstName: "Test",
					lastName: "User",
				},
			},
		},
	});
	console.log("Created test user:", user.email);

	console.log("Seeding completed!");
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error("Seeding error:", e);
		await prisma.$disconnect();
		process.exit(1);
	});
