import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import MasonryColumn from "@/molecules/masonry/column";
import MasonryGrid from "@/molecules/masonry/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";

const aspectRatios = [1, 16 / 9, 3 / 4, 9 / 16, 4 / 3];
const demoItems = Array.from({ length: 15 }).map((item, index) => ({
	id: index + 1,
	color: `hsl(${index * 129}, 60%, 80%)`,
	aspectRatio:
		aspectRatios[
			Math.round(index + (index + 1.1424) * 1.1315 + (index + 1.1358) * 1.1372) %
				aspectRatios.length
		],
}));

const StyledColoredBox = styled.div`
	width: 100%;
	height: 100%;
	${({ theme }) => css`
		border-radius: ${theme.shapes.s};
		box-shadow: ${theme.shadows.s};
	`}
`;

const MasonryExamples = () => {
	const { t } = useTranslation(["navigation"]);
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
				href: "/design-system/masonry",
				title: "Masonry",
			},
		],
		[t]
	);
	return (
		<Layout title="Masonry | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Masonry</Typography>
				</Column>
				<Column>
					<MasonryGrid colCountS={1} colCountM={3} colCountL={4}>
						{demoItems.map(item => {
							return (
								<MasonryColumn key={item.id} aspectRatio={item.aspectRatio}>
									<StyledColoredBox style={{ backgroundColor: item.color }} />
								</MasonryColumn>
							);
						})}
					</MasonryGrid>
				</Column>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default MasonryExamples;
