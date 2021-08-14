import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import Crash from "@/organisms/animations/crash";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { memo } from "react";

const Error500 = () => {
	const { t } = useTranslation(["error", "meta"]);
	return (
		<Layout dark title={t("meta:error.500.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<StyledFlexedGrid>
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
