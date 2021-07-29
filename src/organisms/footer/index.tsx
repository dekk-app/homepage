import I18nLink from "@/atoms/i18n-link";
import Icon from "@/atoms/icon";
import { StyledLink } from "@/atoms/typography/styled";
import routes from "@/ions/routes";
import { Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { DeFlag, UsFlag } from "./flags";
import {
	StyledFooter,
	StyledFooterInlineItems,
	StyledFooterItems,
	StyledLanguageButton,
} from "./styled";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ children, className, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	const router = useRouter();
	return (
		<StyledFooter ref={innerRef} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<StyledFooterItems>
					{/*
					Enable when implemented
					<I18nLink passHref href="/contact">
						{t("navigation:contact")}
					</I18nLink>
					*/}
					<I18nLink passHref href="/legal">
						{t("navigation:imprint")}
					</I18nLink>
					<I18nLink passHref href="/legal/privacy-policy">
						{t("navigation:policy")}
					</I18nLink>
					<I18nLink passHref href="/legal/terms-of-service">
						{t("navigation:terms")}
					</I18nLink>
					<I18nLink passHref href="/legal/cookie-policy">
						{t("navigation:cookies")}
					</I18nLink>
				</StyledFooterItems>
				<StyledFooterInlineItems>
					<StyledLanguageButton
						aria-label="Deutsch"
						onClick={() => {
							void router.replace(
								routes[router.route as keyof typeof routes].de,
								undefined,
								{
									locale: "de",
								}
							);
						}}
					>
						<DeFlag />
					</StyledLanguageButton>
					<StyledLanguageButton
						aria-label="English"
						onClick={() => {
							void router.replace(
								routes[router.route as keyof typeof routes].en,
								undefined,
								{
									locale: "en",
								}
							);
						}}
					>
						<UsFlag />
					</StyledLanguageButton>
					<StyledLink rel="nofollow" aria-label="Visit Dekk on Github">
						<Icon icon="github" />
					</StyledLink>
				</StyledFooterInlineItems>
			</Grid>
		</StyledFooter>
	);
};

export default Footer;
