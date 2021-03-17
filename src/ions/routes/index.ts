import { Route } from "@/ions/enums";
import { RouteConfig, RouteObject } from "@/types";
import { Except } from "type-fest";

const routes: Except<Record<Route, RouteConfig>, Route.home> = {
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
		default:
			return Route.home;
	}
};

export default routes;
