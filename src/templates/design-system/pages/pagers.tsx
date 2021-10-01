import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import Hidden from "@/molecules/hidden";
import Section from "@/molecules/section";
import DarkSection from "@/molecules/section/dark";
import LightSection from "@/molecules/section/light";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import Pager, { config } from "@/organisms/pager";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";

const PagersExamples = () => {
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
				href: "/design-system/pagers",
				title: "Pagers",
			},
		],
		[t]
	);
	return (
		<Layout title="Pagers | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Pagers</Typography>
				</Column>
				<Column colSpanM={6} colStartM={2} colSpanL={6} colStartL={4}>
					<Section>
						<Typography centered variant="h2">
							Minimal
						</Typography>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={config.minimal}
							property="page"
						/>
						<Pager
							fullWidth
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={config.minimal}
							property="page"
						/>
					</Section>
				</Column>
				<Column colStartL={4} colSpanL={6}>
					<Section>
						<Typography centered variant="h2">
							Medium
						</Typography>
						<Pager
							items={4000}
							wrap={0}
							pageSize={{ property: "pageSize" }}
							elements={config.medium}
							property="page"
						/>
						<Hidden hideXS hideS>
							<Pager
								fullWidth
								items={4000}
								pageSize={{ property: "pageSize" }}
								elements={config.medium}
								property="page"
							/>
							<Pager
								items={4000}
								wrap={2}
								pageSize={{ property: "pageSize" }}
								elements={config.medium}
								property="page"
							/>
						</Hidden>
					</Section>
				</Column>
				<Column>
					<Hidden hideXS hideS>
						<Section>
							<Typography centered variant="h2">
								Full
							</Typography>
							<Pager
								items={4000}
								wrap={0}
								pageSize={{ property: "pageSize" }}
								elements={config.full}
								property="page"
							/>
							<Pager
								items={4000}
								pageSize={{ property: "pageSize" }}
								elements={config.full}
								property="page"
							/>
							<Pager
								fullWidth
								items={4000}
								wrap={3}
								pageSize={{ property: "pageSize" }}
								elements={config.full}
								property="page"
							/>
						</Section>
					</Hidden>
				</Column>
			</Grid>
			<Grid>
				<Column>
					<Typography centered variant="h2">
						Custom
					</Typography>
				</Column>
			</Grid>
			<DarkSection>
				<Grid>
					<Column colStartL={4} colSpanL={6}>
						<Typography centered variant="h3">
							Dark
						</Typography>
						<Hidden hideXS hideS>
							<Pager
								fullWidth
								items={4000}
								wrap={3}
								pageSize={{ property: "pageSize" }}
								elements={{
									toFirst: true,
									toPrevious: true,
									firstPage: false,
									dotsBefore: true,
									pager: true,
									currentPage: true,
									of: false,
									dotsAfter: true,
									lastPage: true,
									toNext: true,
									toLast: false,
									pageSize: false,
								}}
								property="page"
							/>
						</Hidden>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: false,
								toPrevious: true,
								firstPage: false,
								dotsBefore: false,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: true,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: true,
								toPrevious: false,
								firstPage: false,
								dotsBefore: false,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: false,
								toLast: true,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: false,
								toPrevious: false,
								firstPage: false,
								dotsBefore: false,
								pager: false,
								currentPage: true,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: false,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: false,
								toPrevious: true,
								firstPage: false,
								dotsBefore: false,
								pager: false,
								currentPage: false,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: true,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							fullWidth
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: true,
								toPrevious: true,
								firstPage: false,
								dotsBefore: false,
								pager: false,
								currentPage: false,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: true,
								toLast: true,
								pageSize: false,
							}}
							property="page"
						/>
					</Column>
				</Grid>
			</DarkSection>
			<LightSection>
				<Grid>
					<Column colStartL={4} colSpanL={6}>
						<Typography centered variant="h3">
							Light
						</Typography>
						<Pager
							fullWidth
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: true,
								toPrevious: false,
								firstPage: false,
								dotsBefore: false,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: true,
								lastPage: true,
								toNext: false,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							fullWidth
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: false,
								toPrevious: false,
								firstPage: true,
								dotsBefore: true,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: false,
								lastPage: false,
								toNext: false,
								toLast: true,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							fullWidth
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: true,
								toPrevious: false,
								firstPage: false,
								dotsBefore: true,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: true,
								lastPage: false,
								toNext: false,
								toLast: true,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							elements={{
								toFirst: false,
								toPrevious: false,
								firstPage: true,
								dotsBefore: true,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: true,
								lastPage: true,
								toNext: false,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
						<Pager
							items={4000}
							pageSize={{ property: "pageSize" }}
							wrap={0}
							elements={{
								toFirst: true,
								toPrevious: true,
								firstPage: false,
								dotsBefore: false,
								pager: true,
								currentPage: true,
								of: false,
								dotsAfter: true,
								lastPage: true,
								toNext: true,
								toLast: false,
								pageSize: false,
							}}
							property="page"
						/>
					</Column>
				</Grid>
			</LightSection>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default PagersExamples;
