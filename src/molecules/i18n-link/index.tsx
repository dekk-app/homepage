import { StyledLink } from "@/atoms/typography/styled";
import routes, { Route } from "@/ions/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { I18nLinkProps } from "./types";

const I18nLink: FC<I18nLinkProps> = ({ bold, children, href, rel, target, ...props }) => {
	const { locale, route } = useRouter();
	const i18nHref = routes[href as Route] ? (routes[href as Route][locale] as string) : href;
	return (
		<Link passHref href={i18nHref}>
			<StyledLink
				{...props}
				bold={bold}
				rel={rel}
				isActive={route === href && route !== "/"}
				target={target}
			>
				{children}
			</StyledLink>
		</Link>
	);
};

export default I18nLink;
