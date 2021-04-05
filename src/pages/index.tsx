import { NextPage } from "next";
import { getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Home = dynamic(async () => import("@/templates/home"));

const Page: NextPage = () => {
	return <Home />;
};

export async function getServerSideProps(context) {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
			session: await getSession(context),
		},
	};
}

export default Page;
