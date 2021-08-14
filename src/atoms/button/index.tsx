import React, { FC } from "react";
import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
