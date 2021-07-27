import { StyledCaptionText } from "@/atoms/typography/styled";
import { TypographyProps } from "@/atoms/typography/types";
import React, { FC } from "react";

const CaptionText: FC<TypographyProps> = ({ children, component, variant, ...props }) => (
	<StyledCaptionText {...props} as={component}>
		{children}
	</StyledCaptionText>
);

export default CaptionText;
