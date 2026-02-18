import connectPgSimple from "connect-pg-simple";
import session from "express-session";
import pg from "pg";

const PgSession = connectPgSimple(session);

const pgPool = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
});

const sessionConfig = {
	store: new PgSession({
		pool: pgPool,
		tableName: "session",
		createTableIfMissing: true,
	}),
	secret: process.env.SESSION_SECRET || "dev-secret-change-in-production",
	name: process.env.SESSION_NAME || "gym-inf.sid",
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: parseInt(process.env.SESSION_MAX_AGE) || 7 * 24 * 60 * 60 * 1000, // 7 days
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
	},
};

if (process.env.NODE_ENV === "production") {
	sessionConfig.proxy = true;
}

export default sessionConfig;
