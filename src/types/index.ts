import { APOLLO_STATE_PROP_NAME } from "@/ions/constants";
import { NormalizedCacheObject } from "@apollo/client";
import { Session } from "next-auth";
import { ClientSafeProvider } from "next-auth/client";

export interface LoginFormProps {
	email: string;
}

export interface WishFormProps {
	subject: string;
	body: string;
}

export interface LoginProps {
	providers: Record<string, ClientSafeProvider>;
}

export interface ConsentState {
	advertising: boolean;
	functional: boolean;
	necessary: true;
	performance: boolean;
	timestamp: number;
}

export interface CookieFirst {
	hasConsented: boolean;
	stealthMode: boolean;
	consent: ConsentState;
	acceptAllCategories(): void;
	acceptCategory(): void;
	acceptPreselectedCategories(): void;
	changeLanguage(): void;
	closePanel(): void;
	declineAllCategories(): void;
	declineCategory(): void;
	fetchLatestScan(): void;
	openPanel(): void;
	renderEmbeds(): void;
	updateConsent(): void;
	withdrawConsent(): void;
}

export interface PageProps {
	providers: Record<string, ClientSafeProvider>;
	session: Session;
	locale: string;
	[APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject;
	consent: ConsentState | null;
}

declare global {
	interface Window {
		CookieFirst?: CookieFirst;
	}
}

export interface AddWishProps {
	onChangeBody(value: string): void;
	onChangeSubject(value: string): void;
	onSubmit(): void;
}

export interface ListOfWishesProps {
	onAddWish(): void;
}
