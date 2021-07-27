import { Grid } from "@/molecules/grid";
import { css, Global, useTheme } from "@emotion/react";
import { ClientSafeProvider, useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";
import { StyledColumn, StyledLayout } from "./styled";

const ProBox = dynamic(async () => import("@/molecules/pro-box"));
const WelcomeScreen = dynamic(async () => import("@/molecules/welcome-screen"));
const Come = dynamic(async () => import("@/atoms/lottie/animations/come"));
const Login = dynamic(async () => import("@/organisms/login"));

const Steps: FC<{ step: number; providers: Record<string, ClientSafeProvider> }> = ({
	step,
	providers,
}) => {
	return (
		<Grid>
			<StyledColumn colSpanS={4} colSpanM={3} colSpanL={5}>
				{step === 0 ? <Login providers={providers} /> : <WelcomeScreen />}
			</StyledColumn>
			<StyledColumn colSpanS={4} colSpanM={5} colSpanL={7} colStartM={4} colStartL={6}>
				{step === 0 ? <ProBox /> : <Come />}
			</StyledColumn>
		</Grid>
	);
};

const Home: FC<{ providers: Record<string, ClientSafeProvider> }> = ({ providers }) => {
	const [session] = useSession();
	const [step, setStep] = useState(session ? 1 : 0);
	const theme = useTheme();
	const { t } = useTranslation(["meta"]);
	useEffect(() => {
		if (session) {
			setStep(1);
		}
	}, [session]);

	return (
		<StyledLayout title={t("meta:home.title")} description={t("meta:home.description")}>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>
			<Steps step={step} providers={providers} />
		</StyledLayout>
	);
};

export default Home;
