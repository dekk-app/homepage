import { Route, Template } from "@/ions/enums";
import { getRoute } from "@/ions/routes";
import { Template as Create } from "@/templates/create";
import { Template as Dashboard } from "@/templates/dashboard";
import { Template as Home } from "@/templates/home";

export { Home, Dashboard, Create };

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

const templates = {
	[Template.home]: Home,
	[Template.dashboard]: Dashboard,
	[Template.create]: Create,
};

export default templates;
