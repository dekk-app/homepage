import { StyledTitleText } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const TitleText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledTitleText {...props} as={component}>
		{children}
	</StyledTitleText>
);

export default TitleText;
