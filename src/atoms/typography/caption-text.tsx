import React, { FC } from "react";
import { StyledCaptionText } from "./styled";
import { TypographyProps } from "./types";

const CaptionText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledCaptionText {...props} as={component}>
		{children}
	</StyledCaptionText>
);

export default CaptionText;
