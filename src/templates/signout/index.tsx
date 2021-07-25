import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Column, Grid } from "@/molecules/grid";
import { css, Global, useTheme } from "@emotion/react";
import { signOut, useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SignOut = () => {
	const theme = useTheme();
	const { t } = useTranslation(["auth", "common"]);
	const router = useRouter();
	const [session] = useSession();
	useEffect(() => {
		if (!session) {
			void router.replace("/");
		}
	}, [session, router]);
	return (
		<Layout>
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
				<Column colSpanM={4} colStartM={3} colStartL={5}>
					<Typography variant="subtitle" component="h1">
						{t("auth:logout")}
					</Typography>
					<Button
						type="button"
						onClick={() => {
							void signOut();
						}}
					>
						{t("common:logout")}
					</Button>
				</Column>
			</Grid>
		</Layout>
	);
};

export default SignOut;
