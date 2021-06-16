import { StyledBody2Text } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const Body2Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledBody2Text {...props} as={component}>
		{children}
	</StyledBody2Text>
);

export default Body2Text;
