import Way from "@/atoms/lottie/animations/way";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Grid } from "@/molecules/grid";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";

const Error500 = () => {
	const theme = useTheme();
	const { t } = useTranslation(["error", "meta"]);
	return (
		<Layout title={t("meta:error.500.title")}>
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
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography centered variant="subtitle" component="h1">
						{t("error:500.headline")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Way />
				</StyledCenteredColumn>
			</Grid>
		</Layout>
	);
};

export default Error500;
