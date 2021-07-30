import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import Contact from "@/templates/contact";
import { PageProps, StaticPageProps } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <Contact />;
};

export const getStaticProps: GetStaticProps = async context => {
	const apolloClient = initializeApollo();

	return addApolloState<StaticPageProps>(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			locale: context.locale,
		},
	});
};

export default Page;
