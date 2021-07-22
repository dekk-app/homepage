import I18nLink from "@/atoms/li18n-ink";
import { Trans, useTranslation } from "next-i18next";
import React, { FC, memo } from "react";

const Transdown: FC<{ i18nKey: string }> = ({ i18nKey }) => {
	const { t } = useTranslation(["form"]);
	return (
		<Trans
			i18nKey={i18nKey}
			components={{
				toPrivacyPolicy: <I18nLink bold href="/legal/privacy-policy" />,
			}}
		>
			{t(i18nKey)}
		</Trans>
	);
};

export default memo(Transdown);
