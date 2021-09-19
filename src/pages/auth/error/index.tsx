import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import ErrorPage from "@/templates/auth/error";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <ErrorPage />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo();
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session,
			locale: context.locale,
			consent: getServerSideCookieConsent(context),
		},
	});
};

export default Page;
