import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";
import { StyledSpace } from "../styled";

const SpaceExamples = () => {
	const { t } = useTranslation(["navigation"]);
	const theme = useTheme();
	const breadcrumbs: RawBreadcrumb[] = useMemo(
		() => [
			{
				href: "/",
				title: t("navigation:home"),
			},
			{
				href: "/design-system",
				title: "Design System",
			},
			{
				href: "/design-system/space",
				title: "Space",
			},
		],
		[t]
	);
	return (
		<Layout title="Space | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Space</Typography>
					<Typography variant="h2">XXS ({theme.spaces.xxs})</Typography>
					<StyledSpace space="xxs" />
					<br />
					<Typography variant="h2">XS ({theme.spaces.xs})</Typography>
					<StyledSpace space="xs" />
					<br />
					<Typography variant="h2">S ({theme.spaces.s})</Typography>
					<StyledSpace space="s" />
					<br />
					<Typography variant="h2">M ({theme.spaces.m})</Typography>
					<StyledSpace space="m" />
					<br />
					<Typography variant="h2">L ({theme.spaces.l})</Typography>
					<StyledSpace space="l" />
					<br />
					<Typography variant="h2">XL ({theme.spaces.xl})</Typography>
					<StyledSpace space="xl" />
					<br />
					<Typography variant="h2">XXL ({theme.spaces.xxl})</Typography>
					<StyledSpace space="xxl" />
				</Column>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default SpaceExamples;
