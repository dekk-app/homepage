import React, { FC } from "react";
import { StyledSubTitleText } from "./styled";
import { TypographyProps } from "./types";

const SubTitleText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledSubTitleText {...props} as={component}>
		{children}
	</StyledSubTitleText>
);

export default SubTitleText;
