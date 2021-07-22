import { HTMLProps } from "react";
import { RegisterOptions } from "react-hook-form";
import { Except } from "type-fest";

export interface TextAreaFieldProps extends Except<HTMLProps<HTMLTextAreaElement>, "onChange"> {
	fullWidth?: boolean;
	validation: RegisterOptions;
	args?: Record<string, string | number>;
	testId?: string;
	defaultValue?: string;
	onChange?(value: string): void;
}
