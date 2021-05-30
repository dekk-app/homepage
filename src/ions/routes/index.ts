import { Route } from "@/ions/enums";
import { RouteConfig } from "@/types";

const routes: Record<Route, RouteConfig> = {
	[Route.dashboard]: {
		dir: {
			en: "dashboard",
			de: "dashboard",
		},
		breadcrumb: {
			en: "Dashboard",
			de: "Dashboard",
		},
	},
	[Route.create]: {
		dir: {
			en: "create",
			de: "erstellen",
		},
		breadcrumb: {
			en: "Create",
			de: "Erstellen",
		},
	},
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
			en: "legal/Data policy",
			de: "rechtliches/Datenschutz",
		},
	},
	[Route.terms]: {
		dir: {
			en: "legal/terms-of-service",
			de: "rechtliches/geschaeftsbedingungen",
		},
		breadcrumb: {
			en: "legal/Data policy",
			de: "rechtliches/Datenschutz",
		},
	},
};

export default routes;
