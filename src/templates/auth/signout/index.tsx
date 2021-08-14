import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { StyledFlexedGrid } from "@/molecules/grid/styled-grid";
import Locked from "@/organisms/animations/locked";
import Transdown from "@/organisms/transdown";
import { signOut } from "next-auth/client";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { memo, useState } from "react";

const ButtonSpinner = dynamic(async () => import("@/atoms/spinner/button-spinner"));

const SignOut = () => {
	const { t } = useTranslation(["auth", "common", "meta"]);
	const [loading, setLoading] = useState(false);

	return (
		<Layout dark title={t("meta:auth.signout.title")}>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<StyledFlexedGrid>
				<StyledCenteredColumn colSpanM={4} colSpanL={5}>
					<Typography variant="h1">{t("auth:signout.headline")}</Typography>

					<Typography>
						<Transdown i18nKey="auth:signout.body" />
					</Typography>
					<div>
						<Button
							type="button"
							onClick={() => {
								setLoading(true);
								void signOut();
							}}
						>
							{loading && <ButtonSpinner />}
							{t("common:signout")}
						</Button>
					</div>
				</StyledCenteredColumn>
				<StyledCenteredColumn colSpanM={4} colSpanL={7}>
					<Locked />
				</StyledCenteredColumn>
			</StyledFlexedGrid>
		</Layout>
	);
};

export default memo(SignOut);
