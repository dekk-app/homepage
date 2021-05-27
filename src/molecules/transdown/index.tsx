import { I18nLink } from "@/atoms/link";
import { StyledLink } from "@/atoms/typography/styled";
import { Route } from "@/ions/enums";
import { I18nLinkProps } from "@/types";
import { Trans, useTranslation } from "next-i18next";
import React from "react";

export const TransdownLink: React.FC<I18nLinkProps> = ({ children, route }) => (
	<I18nLink passHref route={route}>
		<StyledLink>{children}</StyledLink>
	</I18nLink>
);

const Transdown: React.FC<{ i18nKey: string }> = ({ i18nKey }) => {
	const { t } = useTranslation(["form"]);
	return (
		<Trans
			i18nKey={i18nKey}
			components={{
				toLogin: <TransdownLink route={Route.auth} />,
				toForgot: <TransdownLink route={Route.forgot} />,
				toRegister: <TransdownLink route={Route.register} />,
				toPrivacyPolicy: <TransdownLink route={Route.policy} />,
				toDataProcessing: <TransdownLink route={Route.dataProcessing} />,
			}}
		>
			{t(i18nKey)}
		</Trans>
	);
};

export default React.memo(Transdown);
