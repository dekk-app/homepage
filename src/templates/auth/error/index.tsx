import Locked from "@/atoms/lottie/animations/locked";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Grid } from "@/molecules/grid";
import { StyledCenteredColumn, StyledVerticalFlexColumn } from "@/molecules/grid/styled-column";
import Login from "@/organisms/signin";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";

const ErrorPage: FC<PageProps> = ({ providers }) => {
	const theme = useTheme();
	const { query } = useRouter();
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout title={t("meta:auth.error.title")}>
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
					{query.error && (
						<Typography centered variant="subtitle" component="h1">
							{t(`auth:errors.${query.error as string}`)}
						</Typography>
					)}
					<Login providers={providers} />
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

export default ErrorPage;
