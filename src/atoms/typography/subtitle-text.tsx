import { StyledSubTitleText } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const SubTitleText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledSubTitleText {...props} as={component}>
		{children}
	</StyledSubTitleText>
);

export default SubTitleText;
