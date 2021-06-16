import { ElementType, ReactNode } from "react";

export type TypographyVariant = "h1" | "h2" | "h3" | "title" | "body" | "body2";

export interface TypographyProps {
	id?: string;
	component?: ElementType;
	variant?: TypographyVariant;
	raw?: boolean;
	centered?: boolean;
	children?: ReactNode;
}
