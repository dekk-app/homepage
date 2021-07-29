import { ListItem, UnorderedList } from "@/atoms/list";
import { CheckBullet } from "@/atoms/list/bullets";
import { useTranslation } from "next-i18next";
import React from "react";
import { StyledProBox, StyledProHeadline } from "./styled";

const ProBox = () => {
	const { t } = useTranslation(["welcome"]);
	return (
		<StyledProBox>
			<StyledProHeadline>{t("welcome:pro.headline")}</StyledProHeadline>
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
