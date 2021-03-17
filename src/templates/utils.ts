import { Route, Template } from "@/ions/enums";
import { getRoute } from "@/ions/routes";

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
