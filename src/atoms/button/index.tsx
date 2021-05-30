import React, { ButtonHTMLAttributes, ElementType, FC } from "react";
import { StyledButton } from "./styled";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: ElementType<unknown>;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<StyledButton {...props}>{children}</StyledButton>
);

export default Button;
