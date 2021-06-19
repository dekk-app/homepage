import { I18nLink } from "@/atoms/link";
import { StyledLink } from "@/atoms/typography/styled";
import { Route } from "@/ions/enums";
import { Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { StyledFooter, StyledFooterItems } from "./styled";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ children, className, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	return (
		<StyledFooter ref={innerRef} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<StyledFooterItems>
					<I18nLink route={Route.imprint}>
						<StyledLink>{t("navigation:imprint")}</StyledLink>
					</I18nLink>
					<I18nLink route={Route.policy}>
						<StyledLink>{t("navigation:policy")}</StyledLink>
					</I18nLink>
					<I18nLink route={Route.cookies}>
						<StyledLink>{t("navigation:cookies")}</StyledLink>
					</I18nLink>
				</StyledFooterItems>
			</Grid>
		</StyledFooter>
	);
};

export default Footer;
