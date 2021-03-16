import { ActiveLink } from "@/atomic-design/atoms/active-link";
import { routeMap } from "@/atomic-design/ions/routes";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

export const StyledHeader = styled.header`
	position: absolute;
	z-index: 10;
	top: 0;
	right: 0;
	left: 0;
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 2em;
	background: white;
	color: black;
`;

export const Header: React.FC = ({ children }) => {
	const { locale } = useRouter();
	const { t } = useTranslation("common");

	return (
		<StyledHeader>
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
		</StyledHeader>
	);
};
