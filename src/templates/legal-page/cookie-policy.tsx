import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { useCookieFirst } from "@/ions/hooks/consent/cookie-first";
import { Column, Grid } from "@/molecules/grid";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { FC, useEffect, useRef } from "react";

export const CookiePolicy: FC = () => {
	const cookieRef = useRef<HTMLDivElement>();
	const cookieFirst = useCookieFirst();
	const theme = useTheme();
	const { t } = useTranslation("legal");

	useEffect(() => {
		const subscribe = () => {
			if (cookieRef.current && cookieFirst) {
				cookieFirst.renderEmbeds();
			}
		};

		subscribe();
	}, [cookieRef, cookieFirst]);
	return (
		<Layout>
			<Head>
				<meta name="robots" content="noindex,nofollow" />
			</Head>
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
					<Typography variant="h1">{t("legal:cookie-policy")}</Typography>
					<div ref={cookieRef} id="cookiefirst-policy-page" data-language="de" />
				</Column>
			</Grid>
		</Layout>
	);
};

export default CookiePolicy;
