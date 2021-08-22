import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

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

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
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
	fullWidth?: boolean;
	target?: string;
	as?: ElementType;
	className?: string;
	rel?: string;
	style?: CSSProperties;
}

export interface StyledTypographyProps {
	raw?: boolean;
	centered?: boolean;
	light?: boolean;
	as?: ElementType;
}
