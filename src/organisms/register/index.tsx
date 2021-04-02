import { InputField } from "@/molecules/input-field";
import { gql, useMutation } from "@apollo/client";
import { useTranslation } from "next-i18next";
import React from "react";
import { useForm } from "react-hook-form";

export interface RegisterFormProps {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const CREATE_USER = gql`
	mutation createUser(
		$firstName: String!
		$lastName: String!
		$password: String!
		$email: String!
	) {
		createUser(
			user: { firstName: $firstName, lastName: $lastName, password: $password, email: $email }
		) {
			name
		}
	}
`;
const Register: React.FC = () => {
	const { t } = useTranslation(["form"]);
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<RegisterFormProps>();
	const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

	const onSubmit = ({ password, firstName, lastName, email }) => {
		void createUser({ variables: { password, firstName, lastName, email } });
	};

	return data ? (
		<div>{t("form:messages.welcome-user", { name: data.createUser.name })}</div>
	) : loading ? (
		<div>SUBMITTING DATA...</div>
	) : (
		<form onSubmit={handleSubmit(onSubmit)}>
			{error && <div>{error.message}</div>}

			<fieldset>
				<legend>{t("form:legends.enter-name-email")}</legend>
				<InputField
					name="firstName"
					testId="form:firstName"
					type="text"
					inputProps={register("firstName", { required: true })}
					errors={errors}
				/>
				<br />
				<InputField
					name="lastName"
					testId="form:lastName"
					type="text"
					inputProps={register("lastName", { required: true })}
					errors={errors}
				/>
				<br />
				<InputField
					name="email"
					testId="form:email"
					type="email"
					inputProps={register("email", { required: true })}
					errors={errors}
				/>
			</fieldset>
			<fieldset>
				<legend>{t("form:legends.enter-password-confirm")}</legend>
				<InputField
					name="password"
					testId="form:password"
					type="password"
					inputProps={register("password", {
						required: true,
						minLength: 8,
					})}
					args={{ minLength: 8 }}
					errors={errors}
				/>
				<br />
				<InputField
					name="confirmPassword"
					testId="form:confirmPassword"
					type="password"
					inputProps={register("confirmPassword", {
						required: true,
						minLength: 8,
						validate: {
							passwordMatch: value => value === getValues().password,
						},
					})}
					args={{ minLength: 8 }}
					errors={errors}
				/>
			</fieldset>
			<button type="submit" data-test-id="form:register">
				{t("form:button-labels.register")}
			</button>
		</form>
	);
};

export default Register;
