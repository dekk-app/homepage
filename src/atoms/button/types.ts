import { ButtonHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: ElementType;
	fullWidth?: boolean;
	text?: boolean;
}

export interface StyledButtonProps {
	fullWidth?: boolean;
	text?: boolean;
}
