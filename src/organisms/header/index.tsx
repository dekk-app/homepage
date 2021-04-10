import React, { FC, memo } from "react";
import { StyledHeader } from "./styled";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ children, className, innerRef, testId }) => {
	return (
		<StyledHeader ref={innerRef} className={className} data-test-id={testId}>
			{children}
		</StyledHeader>
	);
};

export default memo<HeaderProps>(Header, (previousProps, nextProps) => {
	console.log(previousProps, nextProps);
	return true;
});
