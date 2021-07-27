import { getServerSideConsent } from "@/ions/hooks/consent/consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import ErrorPage from "@/templates/auth/error";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = props => {
	return <ErrorPage {...props} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo();

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session: await getSession(context),
			locale: context.locale,
			consent: getServerSideConsent(context),
		},
	});
};

export default Page;
