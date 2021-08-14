import React, { FC } from "react";
import { StyledH4Text } from "./styled";
import { TypographyProps } from "./types";

const H4Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH4Text {...props} as={component}>
		{children}
	</StyledH4Text>
);

export default H4Text;
