import Error500 from "@/templates/error/500";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage = () => {
	return <Error500 />;
};

export const getStaticProps: GetStaticProps = async context => {
	return {
		props: {
			...(await serverSideTranslations(context.locale)),
		},
	};
};

export default Page;
