import { ButtonProps } from "@/atoms/button/types";
import React, { FC } from "react";
import { StyledButton } from "./styled";

const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
