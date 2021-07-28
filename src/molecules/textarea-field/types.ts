import { HTMLProps } from "react";
import { RegisterOptions } from "react-hook-form";
import { Except } from "type-fest";

export interface TextAreaFieldProps extends Except<HTMLProps<HTMLTextAreaElement>, "onChange"> {
	fullWidth?: boolean;
	autoFocus?: boolean;
	validation: RegisterOptions;
	args?: Record<string, string | number>;
	testId?: string;
	defaultValue?: string;
	helpText?: string;
	onChange?(value: string): void;
}
