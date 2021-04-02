import { InputField } from "@/molecules/input-field";
import { useTranslation } from "next-i18next";
import React from "react";
import { useForm } from "react-hook-form";

export interface ForgotFormProps {
	email: string;
}

const Forgot: React.FC = () => {
	const { t } = useTranslation(["form"]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotFormProps>();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>{t("form:legends.enter-email")}</legend>
				<InputField
					name="email"
					type="email"
					inputProps={register("email", { required: true })}
					errors={errors}
				/>
			</fieldset>
			<button type="submit">{t("form:button-labels.submit")}</button>
		</form>
	);
};

export default Forgot;
