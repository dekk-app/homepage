import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";

export enum Template {
	home = "home",
	dashboard = "dashboard",
	create = "create",
}

export enum Route {
	home = "home",
	dashboard = "dashboard",
	create = "create",
}

export interface PageProps {
	locale: string;
	args: string[];
	template: Template;
}

export interface PageQuery extends ParsedUrlQuery {
	args: string[];
}

export type LocalizedValue<T> = Record<string, T>;

export interface LocalizedString extends LocalizedValue<string> {}

export interface RouteConfig {
	dir: LocalizedString;
	breadcrumb: LocalizedString;
}

export interface RouteObject {
	template: string;
	config: RouteConfig;
}

const routes: Record<Route, RouteConfig> = {
	home: {
		dir: {
			en: "ROOT",
			de: "ROOT",
		},
		breadcrumb: {
			en: "Home",
			de: "home",
		},
	},
	dashboard: {
		dir: {
			en: "dashboard",
			de: "dashboard",
		},
		breadcrumb: {
			en: "Dashboard",
			de: "Dashboard",
		},
	},
	create: {
		dir: {
			en: "create",
			de: "erstellen",
		},
		breadcrumb: {
			en: "Create",
			de: "Erstellen",
		},
	},
};

export const routeMap = Object.entries(routes).map(
	([template, config]): RouteObject => ({ template, config })
);

export const getRoute = (locale: string, localizedDir?: string): Route => {
	const route = routeMap.find(({ config: { dir } }) => {
		const { [locale]: _localizedDir } = dir;
		if (_localizedDir === "ROOT") {
			return localizedDir === undefined;
		}

		return localizedDir === _localizedDir;
	});

	switch (route.template) {
		case Route.dashboard:
			return Route.dashboard;
		case Route.create:
			return Route.create;
		case Route.home:
		default:
			return Route.home;
	}
};

export const getTemplate = (locale: string, [dir]: string[]) => {
	const route = getRoute(locale, dir);

	switch (route) {
		case Route.dashboard:
			return Template.dashboard;
		case Route.create:
			return Template.create;
		case Route.home:
		default:
			return Template.home;
	}
};

export const getStaticProps: GetStaticProps<PageProps, PageQuery> = async ({ params }) => {
	const {
		args: [locale, ...args],
	} = params;
	const template = getTemplate(locale, args);

	return {
		props: {
			locale,
			args,
			template,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = routeMap.flatMap(route =>
		Object.entries(route.config.dir).map(([locale, dir]) => ({
			params: {
				args: [locale, dir].filter(arg => arg !== "ROOT"),
			},
		}))
	);
	console.log(
		"Paths => ",
		JSON.stringify(
			paths.map(({ params: { args } }) => `/${args.join("/")}`),
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

const Page: NextPage<PageProps> = ({ locale, args }) => {
	React.useEffect(() => {
		console.log({ locale, args });
	}, [locale, args]);

	const dashboardHref = `/${locale}/dashboard/`;
	return (
		<div>
			Hello Dekk!
			<Link href={dashboardHref}>Dashboard</Link>
		</div>
	);
};

export default Page;
