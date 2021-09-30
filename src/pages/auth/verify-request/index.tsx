import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import VerifyRequest from "@/templates/auth/verify-request";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <VerifyRequest />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo(null, context.req.headers.cookie);

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session: await getSession(context),
			locale: context.locale,
			consent: getServerSideCookieConsent(context),
			cookie: context.req.headers.cookie || null,
		},
	});
};

export default Page;
