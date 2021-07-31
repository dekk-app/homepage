import Typography from "@/atoms/typography";
import Layout from "@/colonies/layout";
import { useSession } from "@/ions/hooks/session";
import { StyledCenteredColumn, StyledVerticalFlexColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { StepsProps } from "@/templates/home/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo, useEffect, useState } from "react";

const WelcomeScreen = dynamic(async () => import("@/molecules/welcome-screen"));
const Come = dynamic(async () => import("@/atoms/lottie/animations/come"));
const Giveaway = dynamic(async () => import("@/atoms/lottie/animations/giveaway"));
const Signin = dynamic(async () => import("@/organisms/signin"));

const Steps: FC<StepsProps> = ({ step }) => {
	const { t } = useTranslation();
	return (
		<StyledFlexedGrid>
			{step === 0 ? (
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<Signin />
				</StyledCenteredColumn>
			) : (
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<WelcomeScreen />
				</StyledCenteredColumn>
			)}

			{step === 0 ? (
				<StyledCenteredColumn colSpanM={4} colSpanL={5} colStartL={7}>
					<Giveaway />
					<Typography centered variant="subtitle" component="h2">
						{t("welcome:pro.headline")}
					</Typography>
				</StyledCenteredColumn>
			) : (
				<StyledVerticalFlexColumn colSpanM={4} colSpanL={7}>
					<Come />
				</StyledVerticalFlexColumn>
			)}
		</StyledFlexedGrid>
	);
};

const Home = () => {
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
			<Steps step={step} />
		</Layout>
	);
};

export default memo(Home);
