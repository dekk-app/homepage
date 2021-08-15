import { Route, RouteWildcard } from "@/ions/routes";
import { HTMLAttributes } from "react";

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLAnchorElement> {
	href?: Route | RouteWildcard;
	position?: string | number;
}
