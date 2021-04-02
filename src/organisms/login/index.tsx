import { InputField } from "@/molecules/input-field";
import { LoginFormProps } from "@/types";
import { useTranslation } from "next-i18next";
import React from "react";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
	const { t } = useTranslation(["form"]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormProps>();
	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<legend>{t("form:legends.enter-email-password")}</legend>
				<InputField
					name="email"
					type="email"
					inputProps={register("email", { required: true })}
					errors={errors}
				/>
				<br />
				<InputField
					name="password"
					type="password"
					inputProps={register("password", { required: true })}
					errors={errors}
				/>
			</fieldset>
			<button type="submit">{t("form:button-labels.login")}</button>
		</form>
	);
};

export default Login;
