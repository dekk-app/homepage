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
	[Route.register]: {
		dir: {
			en: "auth/register",
			de: "auth/registrieren",
		},
		breadcrumb: {
			en: "Register",
			de: "Registrieren",
		},
	},
	[Route.forgot]: {
		dir: {
			en: "auth/forgot-password",
			de: "auth/passwort-vergessen",
		},
		breadcrumb: {
			en: "Forgot password",
			de: "Passwort vergessen",
		},
	},
	[Route.policy]: {
		dir: {
			en: "data-policy",
			de: "datenschutz",
		},
		breadcrumb: {
			en: "Data policy",
			de: "Datenschutz",
		},
	},
	[Route.dataProcessing]: {
		dir: {
			en: "data-processing",
			de: "daten-bearbeitung",
		},
		breadcrumb: {
			en: "Data processing",
			de: "Datenbearbeitung",
		},
	},
};

export default routes;
