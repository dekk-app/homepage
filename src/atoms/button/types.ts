import { ButtonHTMLAttributes, ElementType } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as?: ElementType;
	text?: boolean;
}
