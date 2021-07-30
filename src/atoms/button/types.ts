import { ButtonHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: ElementType;
	fullWidth?: boolean;
	text?: boolean;
	primary?: boolean;
}

export interface StyledButtonProps {
	fullWidth?: boolean;
	primary?: boolean;
	text?: boolean;
}
