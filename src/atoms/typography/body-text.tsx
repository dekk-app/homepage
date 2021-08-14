import React, { FC } from "react";
import { StyledBodyText } from "./styled";
import { TypographyProps } from "./types";

const BodyText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledBodyText {...props} as={component}>
		{children}
	</StyledBodyText>
);

export default BodyText;
