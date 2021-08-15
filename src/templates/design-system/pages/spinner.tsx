import Spinner from "@/atoms/spinner";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo } from "react";

const SpinnerExamples = () => {
	const theme = useTheme();
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
				href: "/design-system/spinner",
				title: "Spinner",
			},
		],
		[t]
	);
	return (
		<Layout title="Spinner | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Spinner</Typography>
					<Typography variant="h2">Default</Typography>
					<Spinner />
				</Column>
				<Column>
					<Typography variant="h2">Color</Typography>
					<Spinner color={theme.palette.blue} />
					<Spinner color={theme.palette.red} />
					<Spinner color={theme.palette.purple} />
				</Column>
				<Column>
					<Typography variant="h2">Stroke Width</Typography>
					<Spinner strokeWidth={pxToRem(4)} />
				</Column>
				<Column>
					<Typography variant="h2">Size</Typography>
					<Spinner size={pxToRem(100)} />
					<Spinner size="1em" />
				</Column>
				<Column>
					<Typography variant="h2">Mixed</Typography>
					<Spinner strokeWidth={pxToRem(4)} color={theme.palette.purple} />
					<Spinner
						size={pxToRem(100)}
						strokeWidth={pxToRem(5)}
						color={theme.palette.red}
					/>
					<Spinner strokeWidth="1px" size="1em" />
					<Spinner size="3em" color={theme.palette.blue} />
				</Column>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default SpinnerExamples;
