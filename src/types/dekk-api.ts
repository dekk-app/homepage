import { Session } from "next-auth";

export type UserRole = "user" | "moderator" | "admin";

export interface DekkSession extends Session {
	user: {
		createdAt: string;
		email: null | string;
		emailVerified: null | boolean;
		id: number;
		image: string;
		name: string;
		role: UserRole;
		updatedAt: string;
	};
}
