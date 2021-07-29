import Way from "@/atoms/lottie/animations/way";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Grid } from "@/molecules/grid";
import { StyledCenteredColumn, StyledVerticalFlexColumn } from "@/molecules/grid/styled-column";
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
				<StyledCenteredColumn colSpanS={4} colSpanM={3} colSpanL={5}>
					<Typography centered variant="subtitle" component="h1">
						{t("error:500.headline")}
					</Typography>
				</StyledCenteredColumn>
				<StyledVerticalFlexColumn
					colSpanS={4}
					colSpanM={5}
					colSpanL={7}
					colStartM={4}
					colStartL={6}
				>
					<Way />
				</StyledVerticalFlexColumn>
			</Grid>
		</Layout>
	);
};

export default Error500;
