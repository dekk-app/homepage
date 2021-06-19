import { ConsentContext } from "@/ions/hooks/consent/context";
import { ConsentState } from "@/types";
import { GetServerSidePropsContext } from "next";
import { useContext, useEffect, useState } from "react";

const useConsentContext = () => useContext(ConsentContext);

export const useConsent = () => {
	const consentContext = useConsentContext();
	const [consent, setConsent] = useState<ConsentState>(consentContext);
	useEffect(() => {
		const subscribe = () => {
			console.log("foo");
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
