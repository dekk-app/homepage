import { InputFieldProps } from "@/types";
import { useTranslation } from "next-i18next";
import React from "react";

export const InputField: React.FC<InputFieldProps> = ({
	errors,
	name,
	type,
	testId,
	inputProps,
	args,
}) => {
	const { t } = useTranslation(["form"]);
	return (
		<label>
			<span>{t(`form:fields-labels.${name}`)}</span>
			<input {...inputProps} type={type} data-test-id={testId} />
			{errors[name] && <span>{t(`form:errors.${errors[name].type as string}`, args)}</span>}
		</label>
	);
};
