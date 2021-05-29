import { pxToRem } from "@/ions/utils/unit";
import { gql, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ClientSafeProvider, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";

const Button = dynamic(async () => import("@/atoms/button"));
const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));
const Login = dynamic(async () => import("@/organisms/login"));

const StyledLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	${({ theme }) => css`
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};

		@media only screen and ${theme.mq.l} {
			background-image: url(/illustrations/bg_1.svg);
			background-repeat: no-repeat;
			background-position: 50% 50%;
			background-size: auto 540px;
		}
	`};
`;

const StyledProBox = styled.div`
	width: 100%;
	border-radius: 18px;
	background-image: radial-gradient(
		circle at 350px 150px,
		rgba(0, 0, 0, 0.1) 257px,
		transparent 257px
	);
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xl)} ${pxToRem(theme.spaces.l)};
		background-color: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const StyledLottie = styled(Lottie)`
	margin: auto;
	background: red;
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
			<StyledColumn colSpanS={4}>
				{step === 0 ? (
					<Login providers={providers} />
				) : (
					<>
						<Typography variant="h2">We are happy to have you on board.</Typography>
						<Typography>
							We can´t build the best product without you!
							<br />
							Visit our wishlist and help us.
						</Typography>
						<Link passHref href="/wishlist">
							<Button as="a">I have a wish</Button>
						</Link>
					</>
				)}
			</StyledColumn>
			<StyledColumn colSpanS={4} colStartL={9}>
				{step === 0 ? (
					<StyledProBox>
						<Typography variant="h2">Get a free Pro account!</Typography>
						<Typography>Reduced Prices on Marketplace apps</Typography>
						<Typography>Unlimited Presentations</Typography>
						<Typography>Unlimited Teams</Typography>
						<Typography>Unlimited Libraries</Typography>
						<Typography>5GB Storage</Typography>
						<Typography>200MB Uploads</Typography>
						<Typography>… and much more</Typography>
					</StyledProBox>
				) : (
					<StyledLottie options={defaultOptions} width={300} height={(300 / 700) * 950} />
				)}
			</StyledColumn>
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

	const response = useQuery(ALL_USERS);

	useEffect(() => {
		if (session) {
			setStep(1);
		}
	}, [session]);

	useEffect(() => {
		console.log(response);
	}, [response]);

	return (
		<StyledLayout>
			<Steps step={step} providers={providers} />
		</StyledLayout>
	);
};

export default Home;
