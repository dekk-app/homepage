import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { WISHES } from "@/ions/queries/wishes";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import Wishlist from "@/templates/wishlist";
import { PageProps } from "@/types";
import { Wish } from "@/types/backend-api";
import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WrappedWishlist = withLoadingAndError(Wishlist);

const Page: NextPage<PageProps> = () => {
	const { data, error, loading } = useQuery<{ wishes: Wish[] }>(WISHES);

	return <WrappedWishlist data={data} error={error} loading={loading} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const session = await getSession(context);
	const apolloClient = initializeApollo(null, context.req.headers.cookie);
	await apolloClient.query({
		query: WISHES,
	});

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			session,
			providers: await getProviders(),
			locale: context.locale,
			consent: getServerSideCookieConsent(context),
		},
	});
};

export default Page;
