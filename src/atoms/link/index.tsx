import { getI18nRoute } from "@/ions/utils/route";
import { I18nLinkProps } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const I18nLink: React.FC<I18nLinkProps> = ({ children, route, subPath, ...props }) => {
	const { locale, defaultLocale } = useRouter();
	return (
		<Link
			{...props}
			passHref
			href={`${getI18nRoute(route, { locale, defaultLocale })}${
				subPath ? `/${subPath}` : ""
			}`}
		>
			{children}
		</Link>
	);
};
