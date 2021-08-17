import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Crash from "@/molecules/animations/crash";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const Error500 = () => {
	const { t } = useTranslation(["error", "meta"]);
	return (
		<Layout dark title={t("meta:error.500.title")} robots="noindex,nofollow">
			<StyledFlexedGrid stretch>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography centered variant="h1">
						{t("error:500.headline")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Crash />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(Error500);
