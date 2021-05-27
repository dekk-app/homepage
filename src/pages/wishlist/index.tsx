import { NextAuthProvider } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession, getProviders } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Wishlist = dynamic(async () => import("@/templates/wishlist"));

export interface PageProps {
	providers: NextAuthProvider;
	session: Session;
}

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
