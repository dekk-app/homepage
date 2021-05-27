import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Wishlist = dynamic(async () => import("@/templates/wishlist"));

const Page: NextPage<PageProps> = props => {
	return <Wishlist {...props} />;
};

export const getServerSideProps: GetServerSideProps<PageProps> = async context => {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session: await getSession(),
		},
	};
};

export default Page;
