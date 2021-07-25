import { StyledFloatingLabel } from "@/atoms/floating-label/styled";
import { StyledError, StyledHelpText } from "@/atoms/help-text/styled";
import { StyledInputWrapper } from "@/atoms/input-wrapper/styled";
import { StyledRequiredIndicator } from "@/atoms/required-indicator/styled";
import Typography from "@/atoms/typography";
import { useTranslation } from "next-i18next";
import React, {
	FC,
	LegacyRef,
	memo,
	Ref,
	RefCallback,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { FieldError, useFormContext } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { StyledTextArea } from "./styled";
import { TextAreaFieldProps } from "./types";

const TextArea: FC<TextAreaFieldProps> = ({
	name,
	id,
	testId,
	fullWidth,
	defaultValue,
	helpText,
	required,
	validation = {},
	onChange,
}) => {
	const inputRef = useRef<HTMLTextAreaElement | null>(null);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const [filled, setFilled] = useState(defaultValue?.length > 0);
	const [focused, setFocused] = useState(false);
	const { t } = useTranslation(["form"]);
	const { ref, onChange: registeredOnChange, onBlur } = register(name, validation);
	const refCallback = ref as RefCallback<HTMLTextAreaElement>;
	const { current } = inputRef;
	const textAreaRef: LegacyRef<HTMLTextAreaElement> & Ref<TextareaAutosize> = useCallback(
		element => {
			refCallback(element as unknown as HTMLTextAreaElement);
			inputRef.current = element as unknown as HTMLTextAreaElement;
		},
		[refCallback, inputRef]
	);
	useEffect(() => {
		setFilled(current?.value?.length > 0);
	}, [current]);
	useEffect(() => {
		console.log(errors);
	}, [errors]);
	return (
		<>
			<StyledInputWrapper fullWidth={fullWidth} focused={focused} htmlFor={`${id}_field`}>
				<StyledFloatingLabel floating={focused || filled} id={`${id}_label`}>
					{t(`form:fields-labels.${name}`)}
					{required && <StyledRequiredIndicator>*</StyledRequiredIndicator>}
				</StyledFloatingLabel>
				<StyledTextArea
					ref={textAreaRef}
					defaultValue={defaultValue}
					id={`${id}_field`}
					name={name}
					required={Boolean(validation.required)}
					invalid={Boolean(errors.name)}
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

export default memo(TextArea);
