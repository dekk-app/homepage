import I18nLink from "@/atoms/i18n-link";
import { Trans, useTranslation } from "next-i18next";
import React, { FC, memo } from "react";

const Transdown: FC<{ i18nKey: string }> = ({ i18nKey }) => {
	const { t } = useTranslation();
	return (
		<Trans
			i18nKey={i18nKey}
			components={{
				toPrivacyPolicy: <I18nLink bold href="/legal/privacy-policy" />,
				toTerms: <I18nLink bold href="/legal/terms-of-service" />,
				toContact: <I18nLink bold href="/contact" />,
				toWishlist: <I18nLink bold href="/wishlist" />,
			}}
		>
			{t(i18nKey)}
		</Trans>
	);
};

export default memo(Transdown);
