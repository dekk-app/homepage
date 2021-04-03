import { StyledLink } from "@/atoms/typography/styled";
import { Trans, useTranslation } from "next-i18next";
import Link, { LinkProps } from "next/link";
import React from "react";

export const TransdownLink: React.FC<LinkProps> = ({ children, href }) => (
	<Link passHref href={href}>
		<StyledLink>{children}</StyledLink>
	</Link>
);

const Transdown: React.FC<{ i18nKey: string }> = ({ i18nKey }) => {
	const { t } = useTranslation(["form"]);
	return (
		<Trans
			i18nKey={i18nKey}
			components={{
				toLogin: <TransdownLink href="/login" />,
				toForgot: <TransdownLink href="/forgot" />,
				toRegister: <TransdownLink href="/register" />,
				toPrivacyPolicy: <StyledLink href="/policy" target="_blank" rel="noreferrer" />,
				toDataProcessing: (
					<StyledLink href="/data-processing" target="_blank" rel="noreferrer" />
				),
			}}
		>
			{t(i18nKey)}
		</Trans>
	);
};

export default Transdown;
