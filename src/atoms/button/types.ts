import { ButtonHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: ElementType;
	fullWidth?: boolean;
	flex?: boolean;
	slim?: boolean;
	text?: boolean;
	primary?: boolean;
}

export interface StyledButtonProps {
	fullWidth?: boolean;
	flex?: boolean;
	slim?: boolean;
	primary?: boolean;
	text?: boolean;
}
