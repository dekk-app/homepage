import routes from "@/ions/routes";
import { ElementType, ReactNode } from "react";

export type TypographyVariant =
	| "body"
	| "body2"
	| "caption"
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "title"
	| "subtitle";

export interface TypographyProps {
	id?: string;
	component?: ElementType;
	variant?: TypographyVariant;
	raw?: boolean;
	centered?: boolean;
	light?: boolean;
	children?: ReactNode;
}

export interface StyledLinkProps {
	bold?: boolean;
	isActive?: boolean;
	noFollow?: boolean;
}

export interface StyledTypographyProps {
	raw?: boolean;
	centered?: boolean;
	light?: boolean;
	as: ElementType;
}
