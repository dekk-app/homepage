import React, { FC } from "react";
import { StyledHidden } from "./styled";
import { HiddenProps } from "./types";

const Hidden: FC<HiddenProps> = ({ children, ...props }) => {
	return <StyledHidden {...props}>{children}</StyledHidden>;
};

export default Hidden;
