import { getServerSideConsent } from "@/ions/hooks/consent/consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import Wishlist from "@/templates/wishlist";
import { PageProps } from "@/types";
import { Wish } from "@/types/backend-api";
import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WrappedWishlist = withLoadingAndError(Wishlist);
const GET_WISHES = gql`
	query {
		wishes {
			id
			subject
			body
			votes
		}
	}
`;

const Page: NextPage<PageProps> = props => {
	const { data, error, loading } = useQuery<{ wishes: Wish[] }>(GET_WISHES);
	return <WrappedWishlist {...props} data={data} error={error} loading={loading} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const apolloClient = initializeApollo();
	await apolloClient.query({
		query: GET_WISHES,
	});

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
