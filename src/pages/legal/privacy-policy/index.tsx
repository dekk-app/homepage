import { PageProps } from "@/types";
import { GetServerSideProps, NextPage } from "next";
import { getProviders, getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const LegalPage = dynamic(async () => import("@/templates/legal-page"));

const Page: NextPage<PageProps> = props => {
	return <LegalPage {...props} />;
};

export const getStaticProps: GetServerSideProps<PageProps> = async context => {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
			providers: await getProviders(),
			session: await getSession(context),
		},
	};
};

export default Page;
