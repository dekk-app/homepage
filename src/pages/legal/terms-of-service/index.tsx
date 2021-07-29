import {
	addApolloState,
	contentfulQuery,
	initializeApollo,
	useContentfulQuery,
} from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import LegalPage from "@/templates/legal-page";
import { PageProps, StaticPageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const GET_TERMS = gql`
	query ($locale: String) {
		pageCollection(limit: 1, where: { pageDirectory: "terms" }, locale: $locale) {
			items {
				seo {
					sys {
						id
					}
				}
				body {
					json
				}
			}
		}
	}
`;

const WrappedLegalPage = withLoadingAndError(LegalPage);

const Page: NextPage<PageProps> = props => {
	const { data, error, loading } = useContentfulQuery<{ pageCollection: PageCollection }>(
		GET_TERMS,
		{
			variables: {
				locale: props.locale,
			},
		}
	);
	return <WrappedLegalPage {...props} data={data} error={error} loading={loading} />;
};

export const getStaticProps: GetStaticProps = async context => {
	const apolloClient = initializeApollo();
	await contentfulQuery(apolloClient, {
		query: GET_TERMS,
		variables: {
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
