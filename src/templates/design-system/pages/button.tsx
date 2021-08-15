import Button from "@/atoms/button";
import { StyledButtonGroup } from "@/atoms/button/styled";
import ButtonIcon from "@/atoms/icon/button-icon";
import ButtonSpinner from "@/atoms/spinner/button-spinner";
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
import React, { useMemo } from "react";

const ButtonExamples = () => {
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
				href: "/design-system/button",
				title: "Button",
			},
		],
		[t]
	);
	return (
		<Layout title="Button | Design System" breadcrumbs={breadcrumbs} robots="noindex,nofollow">
			<Grid>
				<Column>
					<Breadcrumbs />
					<Typography variant="h1">Button</Typography>
				</Column>
				<Column>
					<Typography variant="h2">Primary</Typography>
				</Column>
				<Column>
					<StyledButtonGroup>
						<Button primary>Primary Button</Button>
						<Button primary disabled>
							Primary Button
						</Button>
						<Button primary>
							<ButtonSpinner />
							Loading...
						</Button>
						<Button primary>
							<ButtonIcon icon="heartOutlined" />
							Like
						</Button>
					</StyledButtonGroup>
				</Column>
				<Column>
					<Typography variant="h2">Default</Typography>
				</Column>
				<Column>
					<StyledButtonGroup>
						<Button>Default Button</Button>
						<Button disabled>Default Button</Button>
						<Button>
							<ButtonSpinner />
							Loading...
						</Button>
						<Button>
							<ButtonIcon icon="heartOutlined" />
							Like
						</Button>
					</StyledButtonGroup>
				</Column>
				<Column>
					<Typography variant="h2">Text</Typography>
				</Column>
				<Column>
					<StyledButtonGroup>
						<Button text>text Button</Button>
						<Button text disabled>
							Text Button
						</Button>
						<Button text>
							<ButtonSpinner />
							Loading...
						</Button>
						<Button text>
							<ButtonIcon icon="heartOutlined" />
							Like
						</Button>
					</StyledButtonGroup>
				</Column>
			</Grid>
			<LightSection>
				<Grid>
					<Column>
						<Typography variant="h2">Mixed on Light Background</Typography>
					</Column>
					<Column>
						<StyledButtonGroup>
							<Button primary>Submit</Button>
							<Button>Reset</Button>
							<Button text>Cancel</Button>
						</StyledButtonGroup>
					</Column>
				</Grid>
			</LightSection>
			<DarkSection>
				<Grid>
					<Column>
						<Typography variant="h2">Mixed on Dark Background</Typography>
					</Column>
					<Column>
						<StyledButtonGroup>
							<Button primary>Submit</Button>
							<Button>Reset</Button>
							<Button text>Cancel</Button>
						</StyledButtonGroup>
					</Column>
				</Grid>
			</DarkSection>
			{process.env.NODE_ENV === "production" && <OverlayGrid />}
		</Layout>
	);
};

export default ButtonExamples;
