import Typography from "@/atoms/typography";
import { GlobalTypography } from "@/atoms/typography/global";
import { useCookieFirst } from "@/ions/hooks/consent/cookie-first";
import { Column, Grid } from "@/molecules/grid";
import Layout from "@/organisms/layout";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect, useRef } from "react";

export const CookiePolicy: FC = () => {
	const cookieRef = useRef<HTMLDivElement>();
	const cookieFirst = useCookieFirst();
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
			<GlobalTypography />
			<Grid>
				<Column>
					<Typography variant="h1">{t("legal:cookie-policy")}</Typography>
					<div ref={cookieRef} id="cookiefirst-policy-page" data-language="de" />
				</Column>
			</Grid>
		</Layout>
	);
};
