import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Column, Grid } from "@/molecules/grid";
import Login from "@/organisms/login";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC } from "react";

const ErrorPage: FC<PageProps> = ({ providers }) => {
	const theme = useTheme();
	const { query } = useRouter();
	const { t } = useTranslation();
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
					{query.error && (
						<Typography variant="subtitle" component="h1">
							{t(`auth:errors.${query.error as string}`)}
						</Typography>
					)}
					<Login providers={providers} />
				</Column>
			</Grid>
		</Layout>
	);
};

export default ErrorPage;
