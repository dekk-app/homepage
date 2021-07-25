import I18nLink from "@/atoms/i18n-link";
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
					<I18nLink passHref href="/legal">
						{t("navigation:imprint")}
					</I18nLink>
					<I18nLink passHref href="/legal/privacy-policy">
						{t("navigation:policy")}
					</I18nLink>
					<I18nLink passHref href="/legal/cookie-policy">
						{t("navigation:cookies")}
					</I18nLink>
				</StyledFooterItems>
			</Grid>
		</StyledFooter>
	);
};

export default Footer;
