import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "../models/user.js";

passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		async (email, password, done) => {
			try {
				const user = await UserModel.findByEmail(email);

				if (!user) {
					return done(null, false, { message: "Invalid email or password" });
				}

				const isValidPassword = await UserModel.verifyPassword(
					password,
					user.password,
				);

				if (!isValidPassword) {
					return done(null, false, { message: "Invalid email or password" });
				}

				const { password: _, ...userWithoutPassword } = user;
				return done(null, userWithoutPassword);
			} catch (error) {
				return done(error);
			}
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await UserModel.findById(id);

		if (!user) {
			return done(null, false);
		}

		const { password: _, ...userWithoutPassword } = user;
		done(null, userWithoutPassword);
	} catch (error) {
		done(error);
	}
});

export default passport;
