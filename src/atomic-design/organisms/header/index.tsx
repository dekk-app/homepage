import { ActiveLink } from "@/atomic-design/atoms/active-link";
import { routeMap } from "@/atomic-design/ions/routes";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const Header: React.FC = ({ children }) => {
	const { locale } = useRouter();
	const { t } = useTranslation("common");

	return (
		<header>
			<nav>
				<ActiveLink href="/" data-test-id="header-nav-link">
					{t("home")}
				</ActiveLink>
				{routeMap.map(
					({
						config: {
							breadcrumb: { [locale]: breadcrumb },
							dir: { [locale]: dir },
						},
						template,
					}) => {
						return (
							<ActiveLink
								key={template}
								href={`/${dir}`}
								data-test-id="header-nav-link"
							>
								{breadcrumb}
							</ActiveLink>
						);
					}
				)}
			</nav>
			{children}
		</header>
	);
};
