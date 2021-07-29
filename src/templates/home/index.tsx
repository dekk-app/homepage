import Layout from "@/colonies/layout";
import { StyledCenteredColumn, StyledVerticalFlexColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { css, Global, useTheme } from "@emotion/react";
import { ClientSafeProvider, useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, useEffect, useState } from "react";

const ProBox = dynamic(async () => import("@/molecules/pro-box"));
const WelcomeScreen = dynamic(async () => import("@/molecules/welcome-screen"));
const Come = dynamic(async () => import("@/atoms/lottie/animations/come"));
const Login = dynamic(async () => import("@/organisms/signin"));

const Steps: FC<{ step: number; providers: Record<string, ClientSafeProvider> }> = ({
	step,
	providers,
}) => {
	return (
		<StyledFlexedGrid>
			{step === 0 ? (
				<StyledVerticalFlexColumn colSpanM={4} colSpanL={5}>
					<Login providers={providers} />
				</StyledVerticalFlexColumn>
			) : (
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<WelcomeScreen />
				</StyledCenteredColumn>
			)}

			<StyledVerticalFlexColumn colSpanM={4} colSpanL={7}>
				{step === 0 ? <ProBox /> : <Come />}
			</StyledVerticalFlexColumn>
		</StyledFlexedGrid>
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
		<Layout title={t("meta:home.title")} description={t("meta:home.description")}>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>
			<Steps step={step} providers={providers} />
		</Layout>
	);
};

export default Home;
