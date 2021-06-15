import { StyledH1Text } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const H1Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH1Text {...props} as={component}>
		{children}
	</StyledH1Text>
);

export default H1Text;
