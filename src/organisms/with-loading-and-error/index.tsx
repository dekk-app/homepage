import { ApolloError } from "@apollo/client";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ComponentProps, ComponentType } from "react";

const spin = keyframes`
	to {
		transform: rotate(1turn);
	}
`;

export const Loader = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1em;
	height: 1em;
	margin: -0.5em;
	animation: ${spin} 1s infinite;
	border: 1px solid;
	border-radius: 50%;
	border-color: rgba(0, 0, 0, 0.2) black rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2);
	font-size: 4rem;
`;

export const withLoadingAndError = <C extends ComponentType<ComponentProps<C>>>(Component: C) => {
	return ({
		error,
		loading,
		...props
	}: ComponentProps<C> & { loading?: boolean; error?: ApolloError }) => {
		if (loading) {
			return <Loader />;
		}

		if (error) {
			return (
				<pre>
					<code>{error.message}</code>
				</pre>
			);
		}

		return <Component {...(props as ComponentProps<C>)} />;
	};
};
