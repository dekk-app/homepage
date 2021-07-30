import Crash from "@/atoms/lottie/animations/crash";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { memo } from "react";

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
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography centered variant="h1">
						{t("error:500.headline")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Crash />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(Error500);
