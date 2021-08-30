import { GetServerSidePropsContext } from "next";
import React, { createContext, FC, useCallback, useContext, useMemo, useState } from "react";
import { CookieConsent, CookieConsentHookState, useCookieConsent } from "use-cookie-consent";
import {
	DurationCookieTypes,
	ProvenanceCookieTypes,
	PurposeCookieTypes,
} from "use-cookie-consent/build/cjs/types";

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

type CookieTypes = PurposeCookieTypes & DurationCookieTypes & ProvenanceCookieTypes;

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
	const [localConsent, setLocalConsent] = useState(defaultConsent || consent);
	const localAcceptAllCookies = useCallback(() => {
		acceptAllCookies();
		setLocalConsent(() => ({
			necessary: true,
			preferences: true,
			statistics: true,
			marketing: true,
			firstParty: true,
			thirdParty: true,
			session: true,
			persistent: true,
		}));
	}, [acceptAllCookies]);

	const localDeclineAllCookies = useCallback(() => {
		declineAllCookies();
		setLocalConsent(() => ({
			necessary: true,
			preferences: false,
			statistics: false,
			marketing: false,
			firstParty: false,
			thirdParty: false,
			session: false,
			persistent: false,
		}));
	}, [declineAllCookies]);

	const localAcceptCookies = useCallback(
		(cookies: CookieTypes) => {
			acceptCookies(cookies);
			setLocalConsent(previousState => ({
				...previousState,
				...cookies,
			}));
		},
		[acceptCookies]
	);

	const context = useMemo(
		() => ({
			consent: localConsent,
			acceptAllCookies: localAcceptAllCookies,
			declineAllCookies: localDeclineAllCookies,
			acceptCookies: localAcceptCookies,
			didAcceptAll,
			didDeclineAll,
			cookies,
		}),
		[
			localConsent,
			localAcceptAllCookies,
			localDeclineAllCookies,
			localAcceptCookies,
			didAcceptAll,
			didDeclineAll,
			cookies,
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
