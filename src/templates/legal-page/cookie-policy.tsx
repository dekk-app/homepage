import Typography from "@/atoms/typography";
import Layout from "@/colonies/layout";
import { useCookieFirst } from "@/ions/hooks/consent/cookie-first";
import { Column, Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { memo, useEffect, useRef } from "react";

export const CookiePolicy = () => {
	const cookieRef = useRef<HTMLDivElement>();
	const cookieFirst = useCookieFirst();
	const { t } = useTranslation(["legal", "meta"]);

	useEffect(() => {
		const subscribe = () => {
			if (cookieRef.current && cookieFirst) {
				cookieFirst.renderEmbeds();
			}
		};

		subscribe();
	}, [cookieRef, cookieFirst]);
	return (
		<Layout title={t("meta:legal.cookie-policy.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<Grid>
				<Column>
					<Typography variant="h1">{t("legal:cookie-policy")}</Typography>
					<div ref={cookieRef} id="cookiefirst-policy-page" data-language="de" />
				</Column>
			</Grid>
		</Layout>
	);
};

export default memo(CookiePolicy);
