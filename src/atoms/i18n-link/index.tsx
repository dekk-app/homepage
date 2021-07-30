import { StyledLink } from "@/atoms/typography/styled";
import { StyledLinkProps } from "@/atoms/typography/types";
import routes, { Route } from "@/ions/routes";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";

const I18nLink: FC<LinkProps & StyledLinkProps & { href: Route }> = ({
	bold,
	children,
	href,
	noFollow,
	target,
	...props
}) => {
	const { locale, route } = useRouter();
	const i18nHref = routes[href as Route][locale] as string;
	return (
		<Link passHref href={i18nHref}>
			<StyledLink
				{...props}
				bold={bold}
				rel={noFollow && "nofollow"}
				isActive={route === href && route !== "/"}
				target={target}
			>
				{children}
			</StyledLink>
		</Link>
	);
};

export default I18nLink;
