import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Column, Grid } from "@/molecules/grid";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

const VerifyEmail: FC<PageProps> = () => {
	const theme = useTheme();
	const { t } = useTranslation(["auth"]);
	return (
		<Layout>
			<GlobalTypography />
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.light.background};
						color: ${theme.ui.colors.light.color};
					}
				`}
			/>
			<Grid>
				<Column>
					<Typography variant="h1">{t("auth:verify-email")}</Typography>
				</Column>
			</Grid>
		</Layout>
	);
};

export default VerifyEmail;
