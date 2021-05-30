import React, { FC, memo } from "react";
import { StyledFooter } from "./styled";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ children, className, innerRef, testId }) => {
	return (
		<StyledFooter ref={innerRef} className={className} data-test-id={testId}>
			{children}
		</StyledFooter>
	);
};

export default memo(Footer);
