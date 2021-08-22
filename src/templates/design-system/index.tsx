import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";

const DesignSystem = () => {
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
		],
		[t]
	);
	return (
		<Layout title="Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Design System</Typography>
				</Column>
				<Column>
					<ul>
						<li>
							<I18nLink href="/design-system/accordion">Accordion</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/button">Button</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/grid">Grid</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/space">Space</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/spinner">Spinner</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/toggle">Toggle</I18nLink>
						</li>
						<li>
							<I18nLink href="/design-system/typography">Typography</I18nLink>
						</li>
					</ul>
				</Column>
			</Grid>

			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default DesignSystem;
