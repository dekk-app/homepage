import { StyledH4Text } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const H4Text: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledH4Text {...props} as={component}>
		{children}
	</StyledH4Text>
);

export default H4Text;
