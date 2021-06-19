import { Route } from "@/ions/enums";
import { RouteConfig } from "@/types";

const routes: Record<Route, RouteConfig> = {
	[Route.auth]: {
		dir: {
			en: "auth",
			de: "auth",
		},
		breadcrumb: {
			en: "Authorization",
			de: "Autorisierung",
		},
	},
	[Route.imprint]: {
		dir: {
			en: "legal",
			de: "rechtliches",
		},
		breadcrumb: {
			en: "Imprint",
			de: "Impressum",
		},
	},
	[Route.policy]: {
		dir: {
			en: "legal/privacy-policy",
			de: "rechtliches/datenschutz",
		},
		breadcrumb: {
			en: "Data policy",
			de: "Datenschutz",
		},
	},
	[Route.cookies]: {
		dir: {
			en: "legal/cookie-policy",
			de: "rechtliches/cookie-richtlinie",
		},
		breadcrumb: {
			en: "Cookie policy",
			de: "Cookie-Richtlinie",
		},
	},
};

export default routes;
