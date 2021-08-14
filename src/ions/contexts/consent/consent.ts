import { ConsentState } from "@/types";
import { GetServerSidePropsContext } from "next";
import { useContext, useEffect, useState } from "react";
import { ConsentContext } from "./context";

const useConsentContext = () => useContext(ConsentContext);

export const useConsent = () => {
	const consentContext = useConsentContext();
	const [consent, setConsent] = useState<ConsentState>(consentContext);
	useEffect(() => {
		const subscribe = () => {
			if (consent) {
				return;
			}

			const maxTries = 10_000;
			let counter = 0;
			let timeout: number;
			const setTimeout = (delay = 100) =>
				window.setTimeout(() => {
					counter++;
					if (window.CookieFirst?.consent) {
						setConsent(window.CookieFirst.consent);
					} else if (counter < maxTries) {
						timeout = setTimeout();
					}
				}, delay);
			timeout = setTimeout();
			return () => {
				window.clearTimeout(timeout);
			};
		};

		return subscribe();
	}, [consent]);
	return consent;
};

export const getServerSideConsent = (context: GetServerSidePropsContext): ConsentState | null =>
	JSON.parse(context.req.cookies["cookiefirst-consent"] ?? null) as ConsentState;
