import { getServerSideCookieConsent } from "@/ions/contexts/cookie-consent";
import { MY_WISHES, MY_WISHES_COUNT, WISHES, WISHES_COUNT } from "@/ions/queries/wishes";
import { addApolloState, initializeApollo } from "@/ions/services/apollo/client";
import { objectSnakeToCamel } from "@/ions/utils/object";
import Wishlist, { INITIAL_PAGE_SIZE } from "@/templates/wishlist";
import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = () => {
	return <Wishlist />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	const session = await getSession(context);
	const apolloClient = initializeApollo();
	const query = objectSnakeToCamel(context.query);
	const pageSize = query.pageSize
		? Number.parseInt(query.pageSize as string, 10)
		: INITIAL_PAGE_SIZE;
	const page = query.page ? Number.parseInt(query.page as string, 10) - 1 : 0;
	const authorId = query.authorId ? Number.parseInt(query.authorId as string, 10) : null;
	const moderate = query.moderateNotIn ? (query.moderateNotIn as string).split(",") : [];
	const searchQuery = query.searchQuery ?? "";
	await apolloClient.query({
		query: authorId ? MY_WISHES : WISHES,
		variables: {
			query: searchQuery,
			skip: page * pageSize,
			take: pageSize,
			authorId,
			moderate,
		},
	});

	await apolloClient.query({
		query: authorId ? MY_WISHES_COUNT : WISHES_COUNT,
		variables: {
			query: "",
			authorId,
		},
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
