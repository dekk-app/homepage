import { StyledErrorMessage, StyledLoader } from "@/organisms/with-loading-and-error/styled";
import { ApolloError } from "@apollo/client";
import React, { ComponentProps, ComponentType, ReactNode } from "react";

export const withLoadingAndError = <C extends ComponentType<ComponentProps<C>>>(Component: C) => {
	return ({
		error,
		loading,
		children,
		...props
	}: ComponentProps<C> & { loading?: boolean; error?: ApolloError; children?: ReactNode }) => {
		if (loading) {
			return <StyledLoader />;
		}

		if (error) {
			return (
				<StyledErrorMessage>
					<code>{error.message}</code>
				</StyledErrorMessage>
			);
		}

		return <Component {...(props as ComponentProps<C>)}>{children}</Component>;
	};
};
