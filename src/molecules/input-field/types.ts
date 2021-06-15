import { HTMLProps } from "react";
import { RegisterOptions } from "react-hook-form";

export interface InputFieldProps extends HTMLProps<HTMLInputElement> {
	fullWidth?: boolean;
	validation: RegisterOptions;
	args?: Record<string, string | number>;
	testId?: string;
	defaultValue?: string;
}
