import { ErrorComponent } from "@/atoms/error-component";
import { routeMap } from "@/ions/routes";
import templates, { getTemplate } from "@/templates";
import { PageProps, PageQuery } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
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

	return {
		paths,
		// Always false for SSG support.
		// @see https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
		// > fallback: true is not supported when using next export.
		fallback: false,
	};
};

const Page: NextPage<PageProps> = ({ locale, args, template }) => {
	const Component = React.useMemo(
		() =>
			templates[template] ??
			(() => {
				return <ErrorComponent message={`Could not find template for ${template}`} />;
			}),
		[template]
	);

	return <Component />;
};

export default Page;
