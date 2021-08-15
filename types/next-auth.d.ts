import { User } from "@/types/backend-api";
import { Session as NextAuthSession } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
	 */
	interface Session extends NextAuthSession {
		user: User;
	}
}

declare module "next-auth/jwt" {
	/**
	 * Returned by the `jwt` callback and `getToken`, when using JWT sessions
	 */
	interface JWT extends NextAuthJWT {
		user: User;
	}
}
