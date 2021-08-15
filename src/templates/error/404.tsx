import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Way from "@/molecules/animations/way";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const Error404 = () => {
	const { t } = useTranslation(["error", "meta"]);
	return (
		<Layout dark title={t("meta:error.404.title")} robots="noindex,nofollow">
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography centered variant="h1">
						{t("error:404.headline")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Way />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(Error404);
