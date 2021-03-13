import { DataLog } from "@/atomic-design/atoms/data-log";
import { ErrorComponent } from "@/atomic-design/atoms/error-component";
import { routeMap } from "@/atomic-design/ions/routes";
import { LanguageSwitcher } from "@/atomic-design/molecules/language-switcher";
import { Header } from "@/atomic-design/organisms/header";
import templates, { getTemplate } from "@/atomic-design/templates";
import { PageProps, PageQuery } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

export const getStaticProps: GetStaticProps<PageProps, PageQuery> = async ({ locale, params }) => {
	const { args } = params;
	const template = getTemplate(locale, args);

	return {
		props: {
			...(await serverSideTranslations(locale)),
			locale,
			args,
			template,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = routeMap.flatMap(route =>
		Object.entries(route.config.dir).map(([locale, dir]) => ({
			locale,
			params: {
				args: [dir].filter(arg => arg !== "ROOT"),
			},
		}))
	);
	console.info(
		"Paths ->",
		JSON.stringify(
			paths.map(({ params: { args }, locale }) => `/${[locale, ...args].join("/")}`),
			null,
			2
		)
	);
	return {
		paths,
		// Always false for SSG support.
		// @see https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
		// > fallback: true is not supported when using next export.
		fallback: false,
	};
};

const Page: NextPage<PageProps> = ({ locale, args, template }) => {
	const { t } = useTranslation("common");
	const Component = React.useMemo(
		() =>
			templates[template] ??
			(() => {
				return <ErrorComponent message={`Could not find template for ${template}`} />;
			}),
		[template]
	);

	return (
		<Component>
			<div>{t("hello")} Dekk</div>
		</Component>
	);
};

export default Page;