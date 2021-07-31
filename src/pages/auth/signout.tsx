import { getServerSideConsent } from "@/ions/hooks/consent/consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import SignOut from "@/templates/auth/signout";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <SignOut />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const session = await getSession(context);
	const apolloClient = initializeApollo();

	if (!session) {
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
			consent: getServerSideConsent(context),
		},
	});
};

export default Page;
