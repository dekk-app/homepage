import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid, Row } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";
import { StyledColumn } from "../styled";

const GridExamples = () => {
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
				href: "/design-system/grid",
				title: "Grid",
			},
		],
		[t]
	);
	return (
		<Layout title="Grid | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid stretch>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Grid</Typography>
				</Column>
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={2} />
				<StyledColumn colSpanXS={2} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={1} />
				<StyledColumn colSpanXS={2} colSpanS={4} colSpanM={6} />
				<StyledColumn colSpanXS={2} colSpanS={4} colSpanM={6} />
				<StyledColumn colSpanL={1} colStartL={4} />
				<StyledColumn colSpanL={1} colStartL={6} />
				<StyledColumn colSpanL={1} />
				<StyledColumn colSpanL={1} colStartL={9} />
				<StyledColumn colSpanL={3} colStartL={4} />
				<StyledColumn colSpanL={3} />
				<StyledColumn colSpanM={6}>
					<Row stretch>
						<StyledColumn colSpanL={3} />
						<StyledColumn colSpanM="calc(var(--col-count) - 1)" />
						<StyledColumn colSpanM="calc(var(--col-count) - 2)" />
						<StyledColumn colSpanM="calc(var(--col-count) - 3)" />
						<StyledColumn colSpanM="calc(var(--col-count) - 4)" />
						<StyledColumn colSpanM="calc(var(--col-count) - 5)" />
					</Row>
				</StyledColumn>
				<StyledColumn colSpanM={2} colSpanL={6}>
					<Row stretch>
						<StyledColumn colSpanM={6}>
							<Row stretch>
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={3}>
									<Row>
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
									</Row>
								</StyledColumn>
								<StyledColumn colSpanL={1}>
									<Row stretch>
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
									</Row>
								</StyledColumn>
								<StyledColumn colSpanL={1}>
									<Row>
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
										<StyledColumn colSpanL={1} />
									</Row>
								</StyledColumn>
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={1} />
								<StyledColumn colSpanL={1} />
							</Row>
						</StyledColumn>
					</Row>
				</StyledColumn>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default GridExamples;
