import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { useCookieConsentContext } from "@/ions/contexts/cookie-consent";
import { useCookieConsentModal } from "@/ions/contexts/cookie-consent-modal";
import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import { useEscapeKey } from "@/ions/hooks/escape-key";
import { pxToRem } from "@/ions/utils/unit";
import { Column, Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import Modal, { ModalActions, ModalContent, ModalHeader } from "@/molecules/modal";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import React from "react";

export const StyledCookieBanner = styled.div`
	position: fixed;
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.m)} 0;
	`};
`;
const CookieBanner = () => {
	const { acceptAllCookies, declineAllCookies } = useCookieConsentContext();
	const { t } = useTranslation(["cookie-banner", "navigation"]);
	const { close } = useCookieConsentModal();
	useEscapeKey(close);
	useLockBodyScroll();

	return (
		<Grid>
			<Column>
				<Modal onClose={close}>
					<ModalHeader>
						<Typography centered raw variant="h2">
							{t("cookie-banner:headline")}
						</Typography>
					</ModalHeader>
					<ModalContent>
						<div>
							<Typography>{t("cookie-banner:body")}</Typography>
							<I18nLink bold href="/legal/cookie-policy" target="_blank">
								{t("navigation:cookies")}
							</I18nLink>
							<br />
							<I18nLink bold href="/legal/privacy-policy" target="_blank">
								{t("navigation:policy")}
							</I18nLink>
						</div>
					</ModalContent>

					<ModalActions sticky>
						<Button
							primary
							onClick={() => {
								acceptAllCookies();
							}}
						>
							{t("cookie-banner:accept-all")}
						</Button>
						<Button
							text
							onClick={() => {
								declineAllCookies();
							}}
						>
							{t("cookie-banner:deny-all")}
						</Button>
					</ModalActions>
				</Modal>
			</Column>
		</Grid>
	);
};

export default CookieBanner;
