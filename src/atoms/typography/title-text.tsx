import React, { FC } from "react";
import { StyledTitleText } from "./styled";
import { TypographyProps } from "./types";

const TitleText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledTitleText {...props} as={component}>
		{children}
	</StyledTitleText>
);

export default TitleText;
