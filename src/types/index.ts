import { APOLLO_STATE_PROP_NAME } from "@/ions/constants";
import { NormalizedCacheObject } from "@apollo/client";
import { Session } from "next-auth";
import { ClientSafeProvider } from "next-auth/client";
import { CookieConsent } from "use-cookie-consent";

export interface SigninFormProps {
	email: string;
}

export interface ContactFormProps {
	email: string;
	body: string;
}

export interface WishFormProps {
	"wish-subject": string;
	"wish-body": string;
}

export interface PageProps {
	providers: Record<string, ClientSafeProvider>;
	session: Session;
	locale: string;
	[APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject;
	consent: CookieConsent | null;
}

export interface StaticPageProps {
	locale: string;
	[APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject;
}
