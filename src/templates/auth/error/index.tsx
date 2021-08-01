import Crash from "@/atoms/lottie/animations/crash";
import Typography from "@/atoms/typography";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import Signin from "@/organisms/signin";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { memo } from "react";

const ErrorPage = () => {
	const theme = useTheme();
	const { query } = useRouter();
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout title={t("meta:auth.error.title")}>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.dark.background};
						color: ${theme.ui.colors.dark.color};
					}
				`}
			/>
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<Signin />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={5} colStartL={7}>
					<Crash />
					{query.error && (
						<Typography centered variant="subtitle">
							{t(`auth:errors.${query.error as string}`)}
						</Typography>
					)}
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(ErrorPage);
