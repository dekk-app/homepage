import Layout from "@/groups/layout";
import SigninForm from "@/groups/signin";
import Locked from "@/molecules/animations/locked";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

const Signin = () => {
	const { t } = useTranslation(["meta"]);

	return (
		<Layout dark title={t("meta:auth.signin.title")} robots="noindex,nofollow">
			<StyledFlexedGrid stretch>
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<SigninForm />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={5} colStartL={7}>
					<Locked />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(Signin);
