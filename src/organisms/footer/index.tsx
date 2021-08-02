import { StyledButtonGroup, StyledLanguageButton } from "@/atoms/button/styled";
import { DeFlag, UsFlag } from "@/atoms/flags";
import Icon from "@/atoms/icon";
import Typography from "@/atoms/typography";
import routes, { Route } from "@/ions/routes";
import { Grid } from "@/molecules/grid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, memo } from "react";
import {
	StyledFooter,
	StyledFooterColumn,
	StyledFooterIconLink,
	StyledFooterItems,
	StyledFooterLink,
} from "./styled";
import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ children, className, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	const router = useRouter();
	return (
		<StyledFooter ref={innerRef} className={className} data-test-id={testId}>
			{children}
			<Grid>
				<StyledFooterColumn colSpanM={4} colSpanL={3} colStartL={7}>
					<Typography variant="subtitle" component="div">
						{t("navigation:business")}
					</Typography>
					<StyledFooterLink passHref href="/contact">
						{t("navigation:contact")}
					</StyledFooterLink>
				</StyledFooterColumn>
				<StyledFooterColumn colSpanM={4} colSpanL={3}>
					<Typography variant="subtitle" component="div">
						{t("navigation:legal")}
					</Typography>
					<StyledFooterLink passHref href="/legal">
						{t("navigation:imprint")}
					</StyledFooterLink>
					<StyledFooterLink passHref href="/legal/privacy-policy">
						{t("navigation:policy")}
					</StyledFooterLink>
					<StyledFooterLink passHref href="/legal/cookie-policy">
						{t("navigation:cookies")}
					</StyledFooterLink>
					<StyledFooterLink passHref href="/legal/terms-of-service">
						{t("navigation:terms")}
					</StyledFooterLink>
				</StyledFooterColumn>
				<StyledFooterItems colSpanL={3} colStartL={10}>
					<StyledButtonGroup>
						<StyledLanguageButton
							aria-label="Deutsch"
							onClick={() => {
								void router.replace(routes[router.route as Route].de, undefined, {
									locale: "de",
								});
							}}
						>
							<DeFlag />
						</StyledLanguageButton>
						<StyledLanguageButton
							aria-label="English"
							onClick={() => {
								void router.replace(routes[router.route as Route].en, undefined, {
									locale: "en",
								});
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
