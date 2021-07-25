import { StyledFloatingLabel } from "@/atoms/floating-label/styled";
import { StyledError, StyledHelpText } from "@/atoms/help-text/styled";
import { StyledInputWrapper } from "@/atoms/input-wrapper/styled";
import { StyledRequiredIndicator } from "@/atoms/required-indicator/styled";
import Typography from "@/atoms/typography";
import { useTranslation } from "next-i18next";
import React, { FC, memo, RefCallback, useEffect, useRef, useState } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import { StyledInput } from "./styled";
import { InputFieldProps } from "./types";

const InputField: FC<InputFieldProps> = ({
	name,
	id,
	type,
	testId,
	fullWidth,
	defaultValue,
	helpText,
	required,
	validation = {},
	onChange,
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [filled, setFilled] = useState(defaultValue?.length > 0);
	const [focused, setFocused] = useState(false);
	const { t } = useTranslation(["form"]);
	const { ref, onChange: registeredOnChange, onBlur } = register(name, validation);
	const refCallback = ref as RefCallback<HTMLInputElement>;
	const { current } = inputRef;
	useEffect(() => {
		setFilled(current?.value?.length > 0);
	}, [current]);
	return (
		<>
			<StyledInputWrapper fullWidth={fullWidth} focused={focused} htmlFor={`${id}_field`}>
				<StyledFloatingLabel floating={focused || filled} id={`${id}_label`}>
					{t(`form:fields-labels.${name}`)}
					{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
				</StyledFloatingLabel>
				<StyledInput
					ref={element => {
						refCallback(element);
						inputRef.current = element;
					}}
					defaultValue={defaultValue}
					id={`${id}_field`}
					name={name}
					required={Boolean(validation.required)}
					invalid={Boolean(errors.name)}
					type={type}
					data-test-id={testId}
					aria-labelledby={`${id}_label`}
					aria-describedby={`${id}_help`}
					onChange={event_ => {
						setFocused(true);
						setFilled(event_.target.value.length > 0);
						void registeredOnChange(event_);
						if (onChange) {
							onChange(event_.target.value);
						}
					}}
					onFocus={() => {
						setFocused(true);
					}}
					onBlur={event_ => {
						setFocused(false);
						void onBlur(event_);
					}}
				/>
			</StyledInputWrapper>

			<StyledHelpText>
				<Typography raw id={`${id}_help`}>
					{errors[name] ? (
						<StyledError>
							{t(`form:errors.${(errors[name] as FieldError).type as string}`, {
								minLength: 2,
							})}
						</StyledError>
					) : (
						helpText
					)}
				</Typography>
			</StyledHelpText>
		</>
	);
};

export default memo(InputField);
