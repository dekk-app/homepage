import { Grid } from "@/molecules/grid";
import { ClientSafeProvider, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";
import { StyledColumn, StyledLayout } from "./styled";

const ProBox = dynamic(async () => import("@/molecules/pro-box"));
const WelcomeScreen = dynamic(async () => import("@/molecules/welcome-screen"));
const WelcomeLottie = dynamic(async () => import("@/molecules/welcome-screen/lottie"));
const Login = dynamic(async () => import("@/organisms/login"));

const Steps: FC<{ step: number; providers: Record<string, ClientSafeProvider> }> = ({
	step,
	providers,
}) => {
	return (
		<Grid>
			<StyledColumn colSpanS={4}>
				{step === 0 ? <Login providers={providers} /> : <WelcomeScreen />}
			</StyledColumn>
			<StyledColumn colSpanS={4} colStartL={9}>
				{step === 0 ? <ProBox /> : <WelcomeLottie />}
			</StyledColumn>
		</Grid>
	);
};

const Home: FC<{ providers: Record<string, ClientSafeProvider> }> = ({ providers }) => {
	const [session] = useSession();
	const [step, setStep] = useState(session ? 1 : 0);

	useEffect(() => {
		if (session) {
			setStep(1);
		}
	}, [session]);

	return (
		<StyledLayout>
			<Steps step={step} providers={providers} />
		</StyledLayout>
	);
};

export default Home;
