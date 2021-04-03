import React from "react";
import { StyledBodyText, StyledH1Text } from "./styled";

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
	component?: React.ElementType;
	variant?: TypographyVariant;
	raw?: boolean;
	centered?: boolean;
}

const Typography: React.FC<
	TypographyProps & React.HTMLAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement>
> = ({ centered, children, component, raw, variant, ...props }) => {
	switch (variant) {
		case "h1":
			return (
				<StyledH1Text {...props} as={component} centered={centered} raw={raw}>
					{children}
				</StyledH1Text>
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

export default Typography;
