import { ListItem, UnorderedList } from "@/atoms/list";
import { CheckBullet } from "@/atoms/list/bullets";
import Typography from "@/atoms/typography";
import { StyledProBox } from "@/templates/home/styled";
import { useTranslation } from "next-i18next";
import React from "react";

const ProBox = () => {
	const { t } = useTranslation(["welcome"]);
	return (
		<StyledProBox>
			<Typography variant="h2">{t("welcome:pro.headline")}</Typography>
			<UnorderedList>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature1")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature2")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature3")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature4")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature5")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature6")}
				</ListItem>
				<ListItem>
					<CheckBullet />
					{t("welcome:pro.feature7")}
				</ListItem>
			</UnorderedList>
		</StyledProBox>
	);
};

export default ProBox;
