import nextAuth from "next-auth";
import providers from "next-auth/providers";

/* eslint-disable new-cap */
export default nextAuth({
	providers: [
		// Activate once we have a developer account
		// providers.Apple({
		// 	clientId: process.env.APPLE_ID,
		// 	clientSecret: {
		// 		appleId: process.env.APPLE_ID,
		// 		teamId: process.env.APPLE_TEAM_ID,
		// 		privateKey: process.env.APPLE_PRIVATE_KEY,
		// 		keyId: process.env.APPLE_KEY_ID,
		// 	},
		// }),
		providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		providers.Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
		providers.GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	// Optional SQL or MongoDB database to persist users
	database: process.env.DATABASE_URL,
	pages: { signIn: "/auth", signOut: "/auth" },
});
/* eslint-enable new-cap */
