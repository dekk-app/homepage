import { APOLLO_STATE_PROP_NAME } from "@/ions/constants";
import { Route } from "@/ions/enums";
import { NormalizedCacheObject } from "@apollo/client";
import { Session } from "next-auth";
import { ClientSafeProvider } from "next-auth/client";
import { LinkProps } from "next/link";
import { Except } from "type-fest";

export type LocalizedValue<T = unknown> = Record<string, T>;

export type LocalizedString = LocalizedValue<string>;

export interface RouteConfig {
	dir: LocalizedString;
	breadcrumb: LocalizedString;
}

export interface LoginFormProps {
	email: string;
}

export interface LoginProps {
	providers: Record<string, ClientSafeProvider>;
}

/* eslint-enable no-unused-vars */
export interface GetI18nRouteOptions {
	locale: string;
	defaultLocale: string;
}

export interface I18nLinkProps extends Except<LinkProps, "href"> {
	route: Route;
	subPath?: string;
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
