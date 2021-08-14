import React, { FC } from "react";
import { StyledH2Text } from "./styled";
import { TypographyProps } from "./types";

const H2Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH2Text {...props} as={component}>
		{children}
	</StyledH2Text>
);

export default H2Text;
