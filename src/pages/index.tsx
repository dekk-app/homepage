import { Template } from "@/ions/enums";
import { PageProps } from "@/types";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import React from "react";

const Home = dynamic(async () => import("@/templates/home"));

const Page: NextPage<PageProps> = props => {
	const { t } = useTranslation("common");

	return <Home />;
};

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale)),
		locale,
		args: [],
		template: Template.home,
	},
});

export default Page;
