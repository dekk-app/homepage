import { StyledErrorText } from "@/atoms/error-text/styled";
import { StyledFloatingLabel } from "@/atoms/floating-label/styled";
import { StyledHelpText } from "@/atoms/help-text/styled";
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
	autoFocus,
	readOnly,
	disabled,
	helpText,
	required,
	validation = {},
	onChange,
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const {
		register,
		formState: { errors, isValid },
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
			<StyledInputWrapper
				fullWidth={fullWidth}
				disabled={disabled}
				focused={focused}
				htmlFor={`${id}_field`}
			>
				<StyledFloatingLabel
					floating={focused || filled || isValid}
					initial={isValid}
					id={`${id}_label`}
				>
					{t(`form:field-labels.${name}`)}
					{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
				</StyledFloatingLabel>
				<StyledInput
					ref={element => {
						refCallback(element);
						inputRef.current = element;
					}}
					id={`${id}_field`}
					name={name}
					autoFocus={autoFocus}
					readOnly={readOnly}
					disabled={disabled}
					required={Boolean(validation.required)}
					invalid={Boolean(errors[name])}
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

			{errors[name] ? (
				<StyledErrorText arrow>
					<Typography raw id={`${id}_help`}>
						{t(
							`form:errors.${(errors[name] as FieldError).type as string}`,
							validation
						)}
					</Typography>
				</StyledErrorText>
			) : (
				<StyledHelpText>
					<Typography raw id={`${id}_help`}>
						{helpText}
					</Typography>
				</StyledHelpText>
			)}
		</>
	);
};

export default memo(InputField);
