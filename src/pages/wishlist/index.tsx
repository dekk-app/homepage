import { getServerSideConsent } from "@/ions/hooks/consent/consent";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import { withLoadingAndError } from "@/organisms/with-loading-and-error";
import Wishlist from "@/templates/wishlist";
import { USER, WISHES } from "@/templates/wishlist/queries";

import { PageProps } from "@/types";
import { Wish } from "@/types/backend-api";
import { useQuery } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const WrappedWishlist = withLoadingAndError(Wishlist);

const Page: NextPage<PageProps> = props => {
	const { data, error, loading } = useQuery<{ wishes: Wish[] }>(WISHES, {
		pollInterval: 60_000,
	});
	return <WrappedWishlist {...props} data={data} error={error} loading={loading} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const session = await getSession(context);
	const apolloClient = initializeApollo();

	const user = session?.user.email
		? await apolloClient.query({
				query: USER,
				variables: {
					email: session?.user.email,
				},
		  })
		: null;

	const wishes = await apolloClient.query({
		query: WISHES,
	});

	console.log(">>> USER");
	console.log(JSON.stringify(user, null, 4));
	console.log("USER <<<");

	console.log(">>> WISHES");
	console.log(JSON.stringify(wishes, null, 4));
	console.log("WISHES <<<");

	return addApolloState(apolloClient, {
		props: {
			...(await serverSideTranslations(context.locale)),
			session,
			providers: await getProviders(),
			locale: context.locale,
			consent: getServerSideConsent(context),
		},
	});
};

export default Page;
