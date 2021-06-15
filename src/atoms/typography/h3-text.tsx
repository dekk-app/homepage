import { StyledH3Text } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const H3Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH3Text {...props} as={component}>
		{children}
	</StyledH3Text>
);

export default H3Text;
