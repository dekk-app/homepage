import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { Column, Grid } from "@/molecules/grid";
import Login from "@/organisms/signin";
import { PageProps } from "@/types";
import { css, Global, useTheme } from "@emotion/react";
import { useSession } from "next-auth/client";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

const SignIn: FC<PageProps> = ({ providers }) => {
	const theme = useTheme();
	const { t } = useTranslation(["meta"]);
	const router = useRouter();
	const [session] = useSession();
	useEffect(() => {
		if (session) {
			void router.replace("/");
		}
	}, [session, router]);
	return (
		<Layout title={t("meta:auth.signin.title")}>
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
					<Login providers={providers} />
				</Column>
			</Grid>
		</Layout>
	);
};

export default SignIn;
