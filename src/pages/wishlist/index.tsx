import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { WISHES } from "@/ions/queries/wishes";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import Wishlist from "@/templates/wishlist";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <Wishlist />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const session = await getSession(context);
	const apolloClient = initializeApollo(null, context.req.headers.cookie);
	await apolloClient.query({
		query: WISHES,
		variables: {
			query: "",
		},
	});

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			session,
			providers: await getProviders(),
			locale: context.locale,
			consent: getServerSideCookieConsent(context),
			cookie: context.req.headers.cookie || null,
		},
	});
};

export default Page;
