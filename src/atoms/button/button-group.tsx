import React, { FC } from "react";
import { StyledButtonGroup } from "./styled";

const ButtonGroup: FC = ({ children, ...props }) => (
	<StyledButtonGroup {...props}>{children}</StyledButtonGroup>
);

export default ButtonGroup;
