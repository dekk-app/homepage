import Crash from "@/atoms/lottie/animations/crash";
import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import Signin from "@/organisms/signin";
import { css, Global, useTheme } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { memo, useEffect } from "react";

const ErrorPage = () => {
	const theme = useTheme();
	const { query } = useRouter();
	const { t } = useTranslation(["auth", "meta"]);
	const router = useRouter();
	const [session] = useSession();
	useEffect(() => {
		if (session) {
			void router.replace("/");
		}
	}, [session, router]);
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
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					{query.error && (
						<Typography centered>
							{t(`auth:errors.${query.error as string}`)}
						</Typography>
					)}
					<Signin />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Crash />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(ErrorPage);
