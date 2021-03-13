import { getRoute } from "@/atomic-design/ions/routes";
import { Template as Create } from "@/atomic-design/templates/create";
import { Template as Dashboard } from "@/atomic-design/templates/dashboard";
import { Template as Home } from "@/atomic-design/templates/home";
import { Route, Template } from "@/enums";

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
