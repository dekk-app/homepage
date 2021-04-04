/* eslint-disable no-unused-vars */
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

	return null;
};

export default Register;
