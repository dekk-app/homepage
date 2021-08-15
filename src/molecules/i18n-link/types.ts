import { StyledLinkProps } from "@/atoms/typography/types";
import { Route, RouteWildcard } from "@/ions/routes";
import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";
import { Except } from "type-fest";

export interface I18nLinkProps
	extends Except<LinkProps, "as">,
		HTMLAttributes<HTMLAnchorElement>,
		StyledLinkProps {
	href: Route | RouteWildcard;
}
