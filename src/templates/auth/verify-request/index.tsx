import Contact from "@/atoms/lottie/animations/contact";
import Typography from "@/atoms/typography";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { memo } from "react";

const VerifyRequest = () => {
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout dark title={t("meta:auth.verify-request.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography centered variant="h1">
						{t("auth:verify-email")}
					</Typography>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Contact />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(VerifyRequest);
