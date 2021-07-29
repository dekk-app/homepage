import Contact from "@/atoms/lottie/animations/contact";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Grid } from "@/molecules/grid";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { FC } from "react";

const VerifyRequest: FC<PageProps> = () => {
	const theme = useTheme();
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout title={t("meta:auth.verify-request.title")}>
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
						{t("auth:verify-email")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Contact />
				</StyledCenteredColumn>
			</Grid>
		</Layout>
	);
};

export default VerifyRequest;
