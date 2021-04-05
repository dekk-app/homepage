import { NextPage } from "next";
import { getSession } from "next-auth/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Create = dynamic(async () => import("@/templates/create"));

const Page: NextPage = () => {
	console.log("create");
	return <Create />;
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
