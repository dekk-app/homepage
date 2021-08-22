import React, { FC } from "react";
import { StyledIconButton } from "./styled";
import { IconButtonProps } from "./types";

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
	return <StyledIconButton {...props}>{children}</StyledIconButton>;
};

export default IconButton;
