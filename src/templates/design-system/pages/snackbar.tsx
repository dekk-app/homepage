import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import Snackbar from "@/molecules/snackbar";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useCallback, useMemo, useState } from "react";

const SnackbarExamples = () => {
	const { t } = useTranslation(["navigation"]);
	const [isOpen3000, setIsOpen3000] = useState(true);
	const [isOpen10000, setIsOpen10000] = useState(true);
	const [isOpenFixed, setIsOpenFixed] = useState(true);
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
				href: "/design-system/snackbar",
				title: "Snackbar",
			},
		],
		[t]
	);

	const close3000 = useCallback(() => {
		setIsOpen3000(false);
	}, []);

	const close10000 = useCallback(() => {
		setIsOpen10000(false);
	}, []);

	const closeFixed = useCallback(() => {
		setIsOpenFixed(false);
	}, []);

	return (
		<Layout
			title="Snackbar | Design System"
			breadcrumbs={breadcrumbs}
			robots="noindex,nofollow"
		>
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Snackbar</Typography>
					<Typography variant="h2">Default</Typography>
					<Snackbar id="default-snackbar" autoClose={0}>
						<Typography raw>I am a default snackbar.</Typography>
					</Snackbar>
					<Typography variant="h2">Levels</Typography>
					<Snackbar level="error" id="error-snackbar" autoClose={0}>
						<Typography raw>I am an error snackbar.</Typography>
					</Snackbar>
					<Snackbar level="warning" id="warning-snackbar" autoClose={0}>
						<Typography raw>I am a warning snackbar.</Typography>
					</Snackbar>
					<Snackbar level="info" id="info-snackbar" autoClose={0}>
						<Typography raw>I am an info snackbar.</Typography>
					</Snackbar>
					<Typography variant="h2">Close automatically</Typography>
					{isOpen3000 && (
						<Snackbar id="close-3000-snackbar" autoClose={3000} onClose={close3000}>
							<Typography raw>I close after 3 seconds.</Typography>
						</Snackbar>
					)}
					{isOpen10000 && (
						<Snackbar id="close-10000-snackbar" autoClose={10_000} onClose={close10000}>
							<Typography raw>I close after 10 seconds.</Typography>
						</Snackbar>
					)}
					<Typography variant="h2">Fixed</Typography>
					<Typography>Check the bottom of the screen</Typography>
					{isOpenFixed && (
						<Snackbar fixed id="fixed-snackbar" autoClose={0} onClose={closeFixed}>
							<Typography raw>I am fixed to the bottom of the screen.</Typography>
						</Snackbar>
					)}
				</Column>
			</Grid>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default SnackbarExamples;
