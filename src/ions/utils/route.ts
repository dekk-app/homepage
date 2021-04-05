import { Route } from "@/ions/enums";
import routes from "@/ions/routes";
import { GetI18nRouteOptions } from "@/types";

export const getI18nRoute = (route: Route, { locale, defaultLocale }: GetI18nRouteOptions) => {
	if (locale === defaultLocale) {
		return `/${routes[route].dir[defaultLocale]}`;
	}

	return `/${locale}/${routes[route].dir[locale]}`;
};
