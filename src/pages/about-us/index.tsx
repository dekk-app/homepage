import { GET_CONTENT_PAGE } from "@/ions/queries/content-page";
import {
	addApolloState,
	contentfulQuery,
	initializeApollo,
	useContentfulQuery,
} from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import ContentPage from "@/templates/content-page";
import { PageProps, StaticPageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WrappedContentPage = withLoadingAndError(ContentPage);

const Page: NextPage<PageProps> = props => {
	const { data, error, loading } = useContentfulQuery<{ pageCollection: PageCollection }>(
		GET_CONTENT_PAGE,
		{
			variables: {
				pageDirectory: "about",
				locale: props.locale,
			},
		}
	);

	return <WrappedContentPage data={data} error={error} loading={loading} />;
};

export const getStaticProps: GetStaticProps = async context => {
	const apolloClient = initializeApollo();
	await contentfulQuery(apolloClient, {
		query: GET_CONTENT_PAGE,
		variables: {
			pageDirectory: "about",
			locale: context.locale,
		},
	});

	return addApolloState<StaticPageProps>(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			locale: context.locale,
		},
	});
};

export default Page;
