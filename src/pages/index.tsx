import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession, useSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Home = dynamic(async () => import("@/templates/home"));
const SigninHome = dynamic(async () => import("@/templates/signin-home"));

const Page: NextPage<PageProps> = () => {
	const [session] = useSession();
	return session ? <Home /> : <SigninHome />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo();
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
