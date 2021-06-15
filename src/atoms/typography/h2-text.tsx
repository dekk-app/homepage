import { StyledH2Text } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const H2Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH2Text {...props} as={component}>
		{children}
	</StyledH2Text>
);

export default H2Text;
