import React, { FC } from "react";
import { StyledH1Text } from "./styled";
import { TypographyProps } from "./types";

const H1Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH1Text {...props} as={component}>
		{children}
	</StyledH1Text>
);

export default H1Text;
