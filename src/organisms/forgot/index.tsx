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

	return null;
};

export default Forgot;
