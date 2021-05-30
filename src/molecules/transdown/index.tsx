import { I18nLink } from "@/atoms/link";
import { Route } from "@/ions/enums";
import { StyledTransDownLink } from "@/molecules/transdown/styled";
import { I18nLinkProps } from "@/types";
import { Trans, useTranslation } from "next-i18next";
import React from "react";

export const TransdownLink: React.FC<I18nLinkProps> = ({ children, route }) => (
	<I18nLink passHref route={route}>
		<StyledTransDownLink>{children}</StyledTransDownLink>
	</I18nLink>
);

const Transdown: React.FC<{ i18nKey: string }> = ({ i18nKey }) => {
	const { t } = useTranslation(["form"]);
	return (
		<Trans
			i18nKey={i18nKey}
			components={{
				toLogin: <TransdownLink route={Route.auth} />,
				toPrivacyPolicy: <TransdownLink route={Route.policy} />,
				toTermsOfService: <TransdownLink route={Route.terms} />,
			}}
		>
			{t(i18nKey)}
		</Trans>
	);
};

export default React.memo(Transdown);
