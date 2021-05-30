import { I18nLink } from "@/atoms/link";
import { StyledLink } from "@/atoms/typography/styled";
import { Route } from "@/ions/enums";
import { globalStyles, poppins } from "@/ions/styles";
import { pxToRem } from "@/ions/utils/unit";
import { OverlayGrid } from "@/templates/home/components";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";

const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Footer = dynamic(async () => import("@/organisms/footer"));
const Main = dynamic(async () => import("@/organisms/main"));
const Head = dynamic(async () => import("next/head"));

export interface LayoutProps {
	className?: string;
}

export const StyledLinks = styled(Column)`
	display: grid;
	justify-content: flex-end;
	${({ theme }) => css`
		grid-template-columns: repeat(auto-fit, minmax(${pxToRem(theme.spaces.m)}, auto));
		grid-gap: ${pxToRem(theme.spaces.m)};
	`};
`;

const Layout: FC<LayoutProps> = ({ className, children }) => {
	const { t } = useTranslation(["navigation"]);
	return (
		<>
			<Global styles={poppins} />
			<Global styles={globalStyles} />
			<Head>
				<meta
					name="description"
					content="Dekk reimagines presentations. Create and present by intuition. Make a difference, make a Dekk."
				/>
			</Head>
			<Main className={className}>{children}</Main>
			<Footer>
				<Grid>
					<StyledLinks>
						<I18nLink route={Route.imprint}>
							<StyledLink>{t("navigation:imprint")}</StyledLink>
						</I18nLink>
						<I18nLink route={Route.policy}>
							<StyledLink>{t("navigation:policy")}</StyledLink>
						</I18nLink>
						<I18nLink route={Route.terms}>
							<StyledLink>{t("navigation:terms")}</StyledLink>
						</I18nLink>
					</StyledLinks>
				</Grid>
			</Footer>
			{process.env.NODE_ENV !== "production" && <OverlayGrid />}
		</>
	);
};

export default memo(Layout);
