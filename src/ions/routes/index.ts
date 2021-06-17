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
	[Route.terms]: {
		dir: {
			en: "legal/terms-of-service",
			de: "rechtliches/geschaeftsbedingungen",
		},
		breadcrumb: {
			en: "Terms of service",
			de: "Geschäftsbedingungen",
		},
	},
};

export default routes;
