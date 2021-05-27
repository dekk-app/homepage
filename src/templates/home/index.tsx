import { StyledButton } from "@/atoms/button/styled";
import { gql, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ClientSafeProvider, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";

const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));
const Login = dynamic(async () => import("@/organisms/login"));

const Foreground = styled.div`
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	background-image: url(/illustrations/bg_1.svg);
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: auto 540px;
	${({ theme }) => css`
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

const StyledBox = styled.div`
	height: 540px;
	padding: 48px 32px;
	border-radius: 18px;
	background-image: radial-gradient(
		circle at 350px 150px,
		rgba(0, 0, 0, 0.1) 257px,
		transparent 257px
	);
	${({ theme }) => css`
		background-color: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const Steps: React.FC<{ step: number; providers: Record<string, ClientSafeProvider> }> = ({
	step,
	providers,
}) => {
	return (
		<Grid>
			<Column colSpanL={6}>
				{step === 0 ? (
					<Login providers={providers} />
				) : (
					<Typography variant="h2">
						We are happy to
						<br />
						have you on
						<br />
						board.
					</Typography>
				)}
			</Column>
			{step === 1 && (
				<Column colSpanL={5} colStartL={1}>
					<Typography>
						We can´t build the best product without you!
						<br />
						Visit our wishlist and help us.
					</Typography>
					<StyledButton>I have a wish</StyledButton>
				</Column>
			)}
			<Column colSpanL={4} colStartL={8}>
				{step === 0 ? (
					<StyledBox>
						<Typography>Foo</Typography>
					</StyledBox>
				) : (
					<Lottie options={defaultOptions} width={300} height={300 * (950 / 700)} />
				)}
			</Column>
		</Grid>
	);
};

const ALL_USERS = gql`
	query AllUsers {
		users {
			id
			createdAt
			email
			emailVerified
			image
			name
			role
			updatedAt
		}
	}
`;

const Home: React.FC<{ providers: Record<string, ClientSafeProvider> }> = ({ providers }) => {
	const [session] = useSession();
	const [step, setStep] = useState(session ? 1 : 0);
	const next = React.useCallback(() => {
		setStep(previousValue => previousValue + 1);
	}, []);

	const response = useQuery(ALL_USERS);

	useEffect(() => {
		console.log(session);
	}, [session]);

	useEffect(() => {
		console.log(response);
	}, [response]);

	return (
		<Layout>
			<Foreground>
				<button type="button" onClick={next}>
					Next
				</button>
				<Steps step={step} providers={providers} />
			</Foreground>
		</Layout>
	);
};

export default Home;
