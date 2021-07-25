import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Column, Grid } from "@/molecules/grid";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { FC } from "react";

const VerifyRequest: FC<PageProps> = () => {
	const theme = useTheme();
	const { t } = useTranslation(["auth"]);
	return (
		<Layout>
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
				<Column colSpanM={4} colStartM={3} colStartL={5}>
					<Typography variant="subtitle" component="h1">
						{t("auth:verify-email")}
					</Typography>
				</Column>
			</Grid>
		</Layout>
	);
};

export default VerifyRequest;
