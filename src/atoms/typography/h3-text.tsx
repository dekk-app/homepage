import React, { FC } from "react";
import { StyledH3Text } from "./styled";
import { TypographyProps } from "./types";

const H3Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH3Text {...props} as={component}>
		{children}
	</StyledH3Text>
);

export default H3Text;
