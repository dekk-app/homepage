import { HTMLAttributes } from "react";

export interface StyledToggleProps {
	checked?: boolean;
	invalid?: boolean;
	disabled?: boolean;
}

export interface StyledInputProps extends HTMLAttributes<HTMLInputElement> {
	invalid?: boolean;
	disabled?: boolean;
}

export interface ToggleProps extends HTMLAttributes<HTMLInputElement>, StyledToggleProps {}
