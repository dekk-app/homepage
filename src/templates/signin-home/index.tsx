import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Signin from "@/groups/signin";
import Giveaway from "@/molecules/animations/giveaway";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const SigninHome = () => {
	const { t } = useTranslation(["welcome", "meta"]);
	return (
		<Layout
			dark
			title={t("meta:home.title")}
			description={t("meta:home.description")}
			keywords={t("meta:home.keywords")}
		>
			<StyledFlexedGrid stretch data-test-id="logged-out-page">
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<Signin />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={5} colStartL={7}>
					<Giveaway />
					<Typography centered variant="subtitle" component="h2">
						{t("welcome:pro.headline")}
					</Typography>
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(SigninHome);
