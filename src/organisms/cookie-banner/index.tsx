import Button from "@/atoms/button";
import Typography from "@/atoms/typography";
import { useCookieConsentContext } from "@/ions/contexts/cookie-consent";
import { useCookieConsentModal } from "@/ions/stores/modal/cookie-consent";
import { Column, Grid } from "@/molecules/grid";
import I18nLink from "@/molecules/i18n-link";
import Modal, { ModalActions, ModalContent, ModalHeader } from "@/molecules/modal";
import { useTranslation } from "next-i18next";
import React from "react";
import { CookieBannerProps } from "./types";

const CookieBanner = ({ dark }: CookieBannerProps) => {
	const { acceptAllCookies, declineAllCookies } = useCookieConsentContext();
	const { t } = useTranslation(["cookie-banner", "navigation"]);
	const close = useCookieConsentModal(state => state.close);

	return (
		<Grid>
			<Column>
				<Modal anchor="bottomRight" dark={dark} onClose={close}>
					<ModalHeader raw>
						<Typography raw variant="subtitle" component="h2">
							{t("cookie-banner:headline")}
						</Typography>
					</ModalHeader>
					<ModalContent>
						<div>
							<Typography variant="caption">{t("cookie-banner:body")}</Typography>
							<I18nLink bold href="/legal/privacy-policy" target="_blank">
								{t("navigation:policy")}
							</I18nLink>
						</div>
					</ModalContent>

					<ModalActions>
						<Button
							primary
							slim
							autoFocus
							onClick={() => {
								acceptAllCookies();
							}}
						>
							{t("cookie-banner:accept-all")}
						</Button>
						<Button
							text
							slim
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
