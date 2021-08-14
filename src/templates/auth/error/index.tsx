import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Signin from "@/groups/signin";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import Crash from "@/organisms/animations/crash";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { memo } from "react";

const ErrorPage = () => {
	const { query } = useRouter();
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout dark title={t("meta:auth.error.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={4} colStartL={2}>
					<Signin />
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={5} colStartL={7}>
					<Crash />
					{query.error && (
						<Typography centered variant="subtitle">
							{t(`auth:errors.${query.error as string}`)}
						</Typography>
					)}
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(ErrorPage);
