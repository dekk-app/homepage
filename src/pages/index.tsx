import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Home = dynamic(async () => import("@/templates/home"));

const Page: NextPage = () => {
	return <Home />;
};

export async function getStaticProps(context) {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
		},
	};
}

export default Page;
