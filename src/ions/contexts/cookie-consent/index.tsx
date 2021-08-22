import { GetServerSidePropsContext } from "next";
import React, { createContext, FC, useContext, useMemo } from "react";
import { CookieConsent, CookieConsentHookState, useCookieConsent } from "use-cookie-consent";

export const CookieConsentContext = createContext<CookieConsentHookState>({
	consent: {},
	acceptCookies() {
		/**/
	},
	declineAllCookies() {
		/**/
	},
	acceptAllCookies() {
		/**/
	},
	didAcceptAll() {
		return false;
	},
	didDeclineAll() {
		return false;
	},
	cookies: {
		set() {
			return undefined;
		},
		get() {
			return "";
		},
		getAll() {
			return {};
		},
		getJSON() {
			/**/
		},
		getAllJSON() {
			return {};
		},
		remove() {
			/**/
		},
	},
});

export const CookieConsentProvider: FC<{ consent?: CookieConsent }> = ({
	children,
	consent: defaultConsent,
}) => {
	const {
		consent,
		acceptAllCookies,
		declineAllCookies,
		acceptCookies,
		didAcceptAll,
		didDeclineAll,
		cookies,
	} = useCookieConsent({ defaultConsent });

	const context = useMemo(
		() => ({
			consent: defaultConsent || consent,
			acceptAllCookies,
			declineAllCookies,
			acceptCookies,
			didAcceptAll,
			didDeclineAll,
			cookies,
		}),
		[
			consent,
			acceptAllCookies,
			declineAllCookies,
			acceptCookies,
			didAcceptAll,
			didDeclineAll,
			cookies,
			defaultConsent,
		]
	);

	return (
		<CookieConsentContext.Provider value={context}>{children}</CookieConsentContext.Provider>
	);
};

export const useCookieConsentContext = () => useContext(CookieConsentContext);

export const getServerSideCookieConsent = (
	context: GetServerSidePropsContext
): CookieConsent | null =>
	JSON.parse(context.req.cookies.USE_COOKIE_CONSENT_STATE ?? null) as CookieConsent;
