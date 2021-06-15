import { StyledBodyText } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const BodyText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledBodyText {...props} as={component}>
		{children}
	</StyledBodyText>
);

export default BodyText;
