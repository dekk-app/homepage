import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { useTranslation } from "next-i18next";
import Link from "next/link";
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
			<Link passHref href="/wishlist">
				<Button as="a">{t("welcome:button")}</Button>
			</Link>
		</>
	);
};

export default WelcomeScreen;