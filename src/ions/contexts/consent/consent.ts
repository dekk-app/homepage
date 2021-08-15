import { ConsentState } from "@/types";
import { GetServerSidePropsContext } from "next";
import { useContext } from "react";
import { ConsentContext } from "./context";

const useConsentContext = () => useContext(ConsentContext);

export const useConsent = () => {
	const consentContext = useConsentContext();
	return consentContext;
};

export const getServerSideConsent = (context: GetServerSidePropsContext): ConsentState | null =>
	JSON.parse(context.req.cookies["cookie-consent"] ?? null) as ConsentState;
