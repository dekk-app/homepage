import Typography from "@/atoms/typography";
import { StyledProBox } from "@/templates/home/styled";
import { useTranslation } from "next-i18next";
import React from "react";

const ProBox = () => {
	const { t } = useTranslation(["welcome"]);
	return (
		<StyledProBox>
			<Typography variant="h2">{t("welcome:pro.headline")}</Typography>
			<Typography>{t("welcome:pro.feature1")}</Typography>
			<Typography>{t("welcome:pro.feature2")}</Typography>
			<Typography>{t("welcome:pro.feature3")}</Typography>
			<Typography>{t("welcome:pro.feature4")}</Typography>
			<Typography>{t("welcome:pro.feature5")}</Typography>
			<Typography>{t("welcome:pro.feature6")}</Typography>
			<Typography>{t("welcome:pro.feature7")}</Typography>
			<Typography>{t("welcome:pro.feature8")}</Typography>
		</StyledProBox>
	);
};

export default ProBox;
