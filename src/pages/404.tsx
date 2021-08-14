import Error404 from "@/templates/error/404";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage = () => {
	return <Error404 />;
};

export const getStaticProps: GetStaticProps = async context => {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
		},
	};
};

export default Page;
