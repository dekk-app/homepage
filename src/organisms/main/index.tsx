import React, { FC, memo } from "react";
import { StyledMain } from "./styled";
import { MainProps } from "./types";

const Main: FC<MainProps> = ({ children, className, innerRef, testId }) => {
	return (
		<StyledMain ref={innerRef} className={className} data-test-id={testId}>
			{children}
		</StyledMain>
	);
};

export default memo(Main);
