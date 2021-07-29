import Button from "@/atoms/button";
import Locked from "@/atoms/lottie/animations/locked";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Grid } from "@/molecules/grid";
import { StyledCenteredColumn, StyledVerticalFlexColumn } from "@/molecules/grid/styled-column";
import Transdown from "@/molecules/transdown";
import { css, Global, useTheme } from "@emotion/react";
import { signOut, useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignOut = () => {
	const theme = useTheme();
	const { t } = useTranslation(["auth", "common", "meta"]);
	const router = useRouter();
	const [session] = useSession();
	useEffect(() => {
		if (!session) {
			void router.replace("/");
		}
	}, [session, router]);
	return (
		<Layout title={t("meta:auth.signout.title")}>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<GlobalTypography />
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>
			<Grid>
				<StyledCenteredColumn colSpanS={4} colSpanM={3} colSpanL={5}>
					<Typography centered variant="subtitle" component="h1">
						{t("auth:signout.headline")}
					</Typography>

					<Typography>
						<Transdown i18nKey="auth:signout.body" />
					</Typography>
					<div>
						<Button
							text
							type="button"
							onClick={() => {
								void signOut();
							}}
						>
							{t("common:signout")}
						</Button>
					</div>
				</StyledCenteredColumn>
				<StyledVerticalFlexColumn
					colSpanS={4}
					colSpanM={5}
					colSpanL={7}
					colStartM={4}
					colStartL={6}
				>
					<Locked />
				</StyledVerticalFlexColumn>
			</Grid>
		</Layout>
	);
};

export default SignOut;
