import { MotionProps } from "framer-motion";
import React, { ElementType, FC, memo, ReactNode } from "react";
import { StyledBodyText, StyledH1Text, StyledH2Text, StyledH3Text } from "./styled";

export type TypographyVariant =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "title"
	| "heading"
	| "subheading"
	| "body"
	| "caption";

export interface TypographyProps {
	id?: string;
	component?: ElementType;
	variant?: TypographyVariant;
	raw?: boolean;
	centered?: boolean;
	children?: ReactNode;
}

const Typography: FC<TypographyProps & MotionProps> = ({
	centered,
	children,
	component,
	raw,
	variant,
	...props
}) => {
	switch (variant) {
		case "h1":
			return (
				<StyledH1Text {...props} as={component} centered={centered} raw={raw}>
					{children}
				</StyledH1Text>
			);
		case "h2":
			return (
				<StyledH2Text {...props} as={component} centered={centered} raw={raw}>
					{children}
				</StyledH2Text>
			);
		case "h3":
			return (
				<StyledH3Text {...props} as={component} centered={centered} raw={raw}>
					{children}
				</StyledH3Text>
			);
		case "body":
		default:
			return (
				<StyledBodyText {...props} as={component} centered={centered} raw={raw}>
					{children}
				</StyledBodyText>
			);
	}
};

export default memo(Typography);
