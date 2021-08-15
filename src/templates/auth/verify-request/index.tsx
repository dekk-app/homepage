import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Contact from "@/molecules/animations/contact";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const VerifyRequest = () => {
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout dark title={t("meta:auth.verify-request.title")} robots="noindex,nofollow">
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
