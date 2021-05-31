import {
	addApolloState,
	contentfulQuery,
	initializeApollo,
	useContentfulQuery,
} from "@/ions/services/apollo/client";
import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const LegalPage = dynamic(async () => import("@/templates/legal-page"));

const GET_IMPRINT = gql`
	query ($locale: String) {
		pageCollection(limit: 1, where: { pageDirectory: "imprint" }, locale: $locale) {
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

const Page: NextPage<PageProps> = props => {
	const { data } = useContentfulQuery<{ pageCollection: PageCollection }>(GET_IMPRINT, {
		variables: {
			locale: props.locale,
		},
	});

	return <LegalPage {...props} data={data} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo();
	await contentfulQuery(apolloClient, {
		query: GET_IMPRINT,
		variables: {
			locale: context.locale,
		},
	});

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session: await getSession(context),
			locale: context.locale,
		},
	});
};

export default Page;
