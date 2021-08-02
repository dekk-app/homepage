import Locked from "@/atoms/lottie/animations/locked";
import Layout from "@/colonies/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import SigninForm from "@/organisms/signin";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import React, { memo } from "react";

const Signin = () => {
	const { t } = useTranslation(["meta"]);

	return (
		<Layout dark title={t("meta:auth.signin.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<StyledFlexedGrid>
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
