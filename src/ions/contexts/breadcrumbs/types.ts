import { Route, RouteWildcard } from "@/ions/routes";

export interface RawBreadcrumb {
	href: Route | RouteWildcard;
	title: string;
}

export interface Breadcrumb extends RawBreadcrumb {
	id: string;
	position: number;
	current?: boolean;
}
