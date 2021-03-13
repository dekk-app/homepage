import { LanguageSwitcher } from "@/atomic-design/molecules/language-switcher";
import { Header } from "@/atomic-design/organisms/header";
import { Home } from "@/atomic-design/templates";
import { Template } from "@/enums";
import { PageProps } from "@/types";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

const Page: NextPage<PageProps> = props => {
	const { t } = useTranslation("common");
	return (
		<Home>
			<div>{t("hello")} Dekk</div>
		</Home>
	);
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
