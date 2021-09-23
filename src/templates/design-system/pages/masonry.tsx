import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid } from "@/molecules/grid";
import MasonryColumn from "@/molecules/masonry/column";
import MasonryGrid from "@/molecules/masonry/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo, useState } from "react";

const aspectRatios = [
	{ col: 1, row: 2 },
	{ col: 2, row: 4 },
	{ col: 2, row: 6 },
	{ col: 1, row: 5 },
	{ col: 2, row: 7 },
	{ col: 2, row: 5 },
];
const demoItems = Array.from({ length: 32 }).map((item, index) => ({
	id: index + 1,
	color: `hsl(${index * 129}, 60%, 80%)`,
	aspectRatio:
		aspectRatios[
			(((((index + ((((index % 15) % 12) % 9) % 5)) % 17) % 15) % 14) % 11) %
				aspectRatios.length
		],
}));

const StyledColoredBox = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	font-size: 2em;
	font-weight: 600;
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.l)} ${pxToRem(theme.spaces.xs)};
		border-radius: ${theme.shapes.s};
		box-shadow: ${theme.shadows.s};
	`}
`;

const MasonryExamples = () => {
	const { t } = useTranslation(["navigation"]);
	const [open, setOpen] = useState(-1);
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
					<MasonryGrid>
						{demoItems.map((item, index) => {
							const isOpen = open === index;
							return (
								<MasonryColumn
									key={item.id}
									isOpen={isOpen}
									colSpan={item.aspectRatio.col}
									rowSpan={item.aspectRatio.row}
									onClick={() => {
										setOpen(previousState =>
											previousState === index ? -1 : index
										);
									}}
								>
									<StyledColoredBox style={{ backgroundColor: item.color }}>
										{index + 1}
									</StyledColoredBox>
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
