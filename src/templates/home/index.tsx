import Layout from "@/groups/layout";
import Come from "@/molecules/animations/come";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import WelcomeScreen from "@/organisms/welcome-screen";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const Home = () => {
	const { t } = useTranslation(["meta"]);

	return (
		<Layout
			dark
			title={t("meta:home.title")}
			description={t("meta:home.description")}
			keywords={t("meta:home.keywords")}
		>
			<StyledFlexedGrid stretch data-test-id="logged-in-page">
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<WelcomeScreen />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Come />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(Home);
