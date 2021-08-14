import React, { FC } from "react";
import { StyledBody2Text } from "./styled";
import { TypographyProps } from "./types";

const Body2Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledBody2Text {...props} as={component}>
		{children}
	</StyledBody2Text>
);

export default Body2Text;
