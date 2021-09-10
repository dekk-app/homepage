import { HTMLProps } from "react";
import { RegisterOptions } from "react-hook-form";
import { Except } from "type-fest";

export interface InputFieldProps extends Except<HTMLProps<HTMLInputElement>, "onChange"> {
	fullWidth?: boolean;
	autoFocus?: boolean;
	validation?: RegisterOptions;
	args?: Record<string, string | number>;
	testId?: string;
	helpText?: string;
	defaultValue?: string;
	onChange?(value: string): void;
}
