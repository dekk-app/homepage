import Typography from "@/atoms/typography";
import {
	StyledError,
	StyledFloatingLabel,
	StyledHelpText,
	StyledInput,
	StyledInputWrapper,
	StyledRequiredIndicator,
} from "@/molecules/input-field/styled";
import { InputFieldProps } from "@/types";
import { useTranslation } from "next-i18next";
import React from "react";
import { FieldError, useFormContext } from "react-hook-form";

const InputField: React.FC<InputFieldProps> = ({
	name,
	id,
	type,
	testId,
	fullWidth,
	defaultValue,
	validation = {},
	args,
}) => {
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [filled, setFilled] = React.useState(defaultValue?.length > 0);
	const [focused, setFocused] = React.useState(false);
	const { t } = useTranslation(["form"]);
	const { ref, onChange, onBlur } = register(name, validation);
	const refCallback = ref as React.RefCallback<HTMLInputElement>;
	const { current } = inputRef;
	React.useEffect(() => {
		setFilled(current?.value?.length > 0);
	}, [current]);
	return (
		<>
			<StyledInputWrapper fullWidth={fullWidth} focused={focused} htmlFor={`${id}_input`}>
				<StyledFloatingLabel floating={focused || filled} id={`${id}_label`}>
					{t(`form:fields-labels.${name}`)}
					{Boolean(validation.required) && (
						<StyledRequiredIndicator>*</StyledRequiredIndicator>
					)}
				</StyledFloatingLabel>
				<StyledInput
					ref={element => {
						refCallback(element);
						inputRef.current = element;
					}}
					defaultValue={defaultValue}
					id={`${id}_input`}
					name={name}
					required={Boolean(validation.required)}
					invalid={Boolean(errors[name])}
					type={type}
					data-test-id={testId}
					aria-labelledby={`${id}_label`}
					aria-describedby={`${id}_help`}
					onChange={event_ => {
						setFocused(true);
						setFilled(event_.target.value.length > 0);
						void onChange(event_);
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
				<Typography id={`${id}_help`}>
					{errors[name] && (
						<StyledError>
							{t(`form:errors.${(errors[name] as FieldError).type as string}`, args)}
						</StyledError>
					)}
				</Typography>
			</StyledHelpText>
		</>
	);
};

export default React.memo(InputField);
