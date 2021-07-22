import { StyledLink } from "@/atoms/typography/styled";
import { StyledLinkProps } from "@/atoms/typography/types";
import routes from "@/ions/routes";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const I18nLink: FC<LinkProps & StyledLinkProps & { href: keyof typeof routes }> = ({
	bold,
	children,
	href,
}) => {
	const { locale } = useRouter();
	const i18nHref = routes[href as keyof typeof routes][locale] as string;
	return (
		<Link passHref href={i18nHref}>
			<StyledLink bold={bold}>{children}</StyledLink>
		</Link>
	);
};

export default I18nLink;
