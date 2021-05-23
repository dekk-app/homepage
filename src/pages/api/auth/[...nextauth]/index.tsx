import NextAuth from "next-auth";
import providers from "next-auth/providers";
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@dekk-app/dekk-backend/src/colonies/prisma/client'

const prisma = new PrismaClient()

/* eslint-disable new-cap */
export default NextAuth({
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
		providers.Email({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
	adapter: Adapters.Prisma.Adapter({ prisma }),
	secret: process.env.SECRET,

	// @TODO: Use https://github.com/praveenweb/next-auth-hasura-example/blob/main/pages/api/auth/%5B...nextauth%5D.js
	// to make sure the JWT is send in the session

	session: {
		// Use JSON Web Tokens for session instead of database sessions.
		// This option can be used with or without a database for users/accounts.
		// Note: `jwt` is automatically set to `true` if no database is specified.
		jwt: true,

		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 30 * 24 * 60 * 60, // 30 days

		// Seconds - Throttle how frequently to write to database to extend a session.
		// Use it to limit write operations. Set to 0 to always update the database.
		// Note: This option is ignored if using JSON Web Tokens
		updateAge: 24 * 60 * 60, // 24 hours
	},
	jwt: {
		// A secret to use for key generation - you should set this explicitly
		// Defaults to NextAuth.js secret if not explicitly specified.
		// This is used to generate the actual signingKey and produces a warning
		// message if not defined explicitly.
		secret: process.env.SECRET,

		// You can generate a signing key using `jose newkey -s 512 -t oct -a HS512`
		// This gives you direct knowledge of the key used to sign the token so you can use it
		// to authenticate indirectly (eg. to a database driver)
		// signingKey: {"kty":"oct","kid":"Dl893BEV-iVE-x9EC52TDmlJUgGm9oZ99_ZL025Hc5Q","alg":"HS512","k":"K7QqRmJOKRK2qcCKV_pi9PSBv3XP0fpTu30TP8xn4w01xR3ZMZM38yL2DnTVPVw6e4yhdh0jtoah-i4c_pZagA"},
		signingKey: process.env.JWT_SIGNING_PRIVATE_KEY

		// If you chose something other than the default algorithm for the signingKey (HS512)
		// you also need to configure the algorithm
		// verificationOptions: {
		//    algorithms: ['HS256']
		// },

		// Set to true to use encryption. Defaults to false (signing only).
		// encryption: true,
		// encryptionKey: "",
		// decryptionKey = encryptionKey,
		// decryptionOptions = {
		//    algorithms: ['A256GCM']
		// },

		// You can define your own encode/decode functions for signing and encryption
		// if you want to override the default behaviour.
		// async encode({ secret, token, maxAge }) {},
		// async decode({ secret, token, maxAge }) {},
	  }
});
/* eslint-enable new-cap */
