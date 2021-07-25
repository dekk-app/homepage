import I18nLink from "@/atoms/i18n-link";
import Typography from "@/atoms/typography";
import { useTranslation } from "next-i18next";
import React from "react";

const WelcomeScreen = () => {
	const { t } = useTranslation(["welcome"]);
	return (
		<>
			<Typography variant="h2">{t("welcome:headline")}</Typography>
			<Typography>
				{t("welcome:body-line1")}
				<br />
				{t("welcome:body-line2")}
			</Typography>
			<I18nLink passHref bold href="/wishlist">
				<a>{t("welcome:button")}</a>
			</I18nLink>
		</>
	);
};

export default WelcomeScreen;
