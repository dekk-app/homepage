import { StyledButtonGroup, StyledLanguageButton } from "@/atoms/button/styled";
import { DeFlag, UsFlag } from "@/atoms/flags";
import Icon from "@/atoms/icon";
import Typography from "@/atoms/typography";
import routes, { Route } from "@/ions/routes";
import Accordion from "@/molecules/accordion";
import { Column, Grid } from "@/molecules/grid";
import Hidden from "@/molecules/hidden";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import {
	StyledFooter,
	StyledFooterIconLink,
	StyledFooterItems,
	StyledFooterLink,
	StyledFooterMenu,
} from "./styled";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ children, className, innerRef, testId, dark }) => {
	const { t } = useTranslation(["navigation"]);
	const router = useRouter();
	return (
		<StyledFooter ref={innerRef} dark={dark} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<Column colSpanM={2} colSpanL={3}>
					<Hidden hideXS hideS>
						<StyledFooterMenu>
							<Typography variant="subtitle" component="div">
								{t("navigation:business")}
							</Typography>
							<StyledFooterLink href="/contact">
								{t("navigation:contact")}
							</StyledFooterLink>
							<StyledFooterLink href="/about-us">
								{t("navigation:about-us")}
							</StyledFooterLink>
							<StyledFooterLink href="/wishlist" data-test-id="link-to-wishlist">
								{t("navigation:wishlist")}
							</StyledFooterLink>
						</StyledFooterMenu>
					</Hidden>
					<Hidden hideM hideL>
						<Accordion heading={t("navigation:business")} id="footer-menu-business">
							<StyledFooterMenu>
								<StyledFooterLink a11y href="/contact">
									{t("navigation:contact")}
								</StyledFooterLink>
								<StyledFooterLink a11y href="/about-us">
									{t("navigation:about-us")}
								</StyledFooterLink>
								<StyledFooterLink a11y href="/wishlist">
									{t("navigation:wishlist")}
								</StyledFooterLink>
							</StyledFooterMenu>
						</Accordion>
					</Hidden>
				</Column>
				<Column colSpanM={2} colSpanL={3}>
					<Hidden hideXS hideS>
						<StyledFooterMenu>
							<Typography variant="subtitle" component="div">
								{t("navigation:legal")}
							</Typography>
							<StyledFooterLink href="/legal">
								{t("navigation:imprint")}
							</StyledFooterLink>
							<StyledFooterLink href="/legal/privacy-policy">
								{t("navigation:policy")}
							</StyledFooterLink>
							<StyledFooterLink href="/legal/cookie-policy">
								{t("navigation:cookies")}
							</StyledFooterLink>
							<StyledFooterLink href="/legal/terms-of-service">
								{t("navigation:terms")}
							</StyledFooterLink>
						</StyledFooterMenu>
					</Hidden>
					<Hidden hideM hideL>
						<Accordion heading={t("navigation:legal")} id="footer-menu-legal">
							<StyledFooterMenu>
								<StyledFooterLink a11y href="/legal">
									{t("navigation:imprint")}
								</StyledFooterLink>
								<StyledFooterLink a11y href="/legal/privacy-policy">
									{t("navigation:policy")}
								</StyledFooterLink>
								<StyledFooterLink a11y href="/legal/cookie-policy">
									{t("navigation:cookies")}
								</StyledFooterLink>
								<StyledFooterLink a11y href="/legal/terms-of-service">
									{t("navigation:terms")}
								</StyledFooterLink>
							</StyledFooterMenu>
						</Accordion>
					</Hidden>
				</Column>
				<StyledFooterItems>
					<StyledButtonGroup>
						<StyledLanguageButton
							aria-label="Deutsch"
							onClick={() => {
								if (routes[router.route as Route]?.de) {
									void router.replace(
										routes[router.route as Route].de,
										undefined,
										{
											locale: "de",
										}
									);
								} else {
									void router.replace(router.pathname, undefined, {
										locale: "de",
									});
								}
							}}
						>
							<DeFlag />
						</StyledLanguageButton>
						<StyledLanguageButton
							aria-label="English"
							onClick={() => {
								if (routes[router.route as Route]?.en) {
									void router.replace(
										routes[router.route as Route].en,
										undefined,
										{
											locale: "en",
										}
									);
								} else {
									void router.replace(router.pathname, undefined, {
										locale: "en",
									});
								}
							}}
						>
							<UsFlag />
						</StyledLanguageButton>
					</StyledButtonGroup>
					<StyledFooterIconLink
						href="https://github.com/dekk-app"
						rel="noreferrer"
						target="_blank"
						aria-label="Visit Dekk on Github"
					>
						<Icon icon="github" />
					</StyledFooterIconLink>
				</StyledFooterItems>
			</Grid>
		</StyledFooter>
	);
};

export default memo(Footer);
