import Toggle from "@/atoms/toggle";
import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Column, Grid } from "@/molecules/grid";
import DarkSection from "@/molecules/section/dark";
import LightSection from "@/molecules/section/light";
import Breadcrumbs from "@/organisms/breadcrumbs";
import OverlayGrid from "@/organisms/grid-overlay";
import { useTranslation } from "next-i18next";
import process from "process";
import React, { useMemo, useState } from "react";

const ToggleExamples = () => {
	const { t } = useTranslation(["navigation"]);
	const [isOn, setIsOn] = useState(false);
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
				href: "/design-system/toggle",
				title: "Toggle",
			},
		],
		[t]
	);
	return (
		<Layout title="Toggle | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<LightSection>
				<Grid>
					<Column>
						<Breadcrumbs />
						<Typography variant="h1">Toggle</Typography>
						<Typography variant="h2">Light Sections</Typography>
						<ul>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										disabled
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										invalid
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
						</ul>
					</Column>
				</Grid>
			</LightSection>
			<DarkSection>
				<Grid>
					<Column>
						<Typography variant="h2">Dark Sections</Typography>
						<ul>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										disabled
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										invalid
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
							<Typography component="li">
								Please toggle me:{" "}
								<label>
									<Toggle
										checked={isOn}
										onChange={event_ => {
											setIsOn((event_.target as HTMLInputElement).checked);
										}}
									/>{" "}
									{isOn ? "On" : "Off"}
								</label>
							</Typography>
						</ul>
					</Column>
				</Grid>
			</DarkSection>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default ToggleExamples;
