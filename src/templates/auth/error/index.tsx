import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import Signin from "@/groups/signin";
import Crash from "@/molecules/animations/crash";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { memo } from "react";

const ErrorPage = () => {
	const { query } = useRouter();
	const { t } = useTranslation(["auth", "meta"]);
	return (
		<Layout dark title={t("meta:auth.error.title")} robots="noindex,nofollow">
			<StyledFlexedGrid stretch>
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
