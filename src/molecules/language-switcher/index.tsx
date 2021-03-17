import { ROOT } from "@/ions/constants";
import routes from "@/ions/routes";
import { LocalizedString, StyledLinkProps } from "@/types";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const ErrorComponent = dynamic(async () => import("@/atoms/error-component"));
const Link = dynamic(async () => import("next/link"));
const StyledLink = dynamic<React.ComponentPropsWithRef<React.ElementType> & StyledLinkProps>(
	async () => import("@/molecules/active-link/styled").then(mod => mod.StyledLink)
);

export const LanguageSwitcher: React.FC = () => {
	const router = useRouter();
	const { t } = useTranslation("common");
	const [localizedDir] = router.query.args ?? [ROOT];
	const found = Object.entries(routes).find(([, value]) => {
		return Object.values(value.dir).includes(localizedDir);
	});

	if (!found && localizedDir !== ROOT) {
		return <ErrorComponent message={`Could not find href for ${localizedDir}`} />;
	}

	const [, { dir }] = found ?? [
		ROOT,
		{
			dir: router.locales.reduce(
				(previousValue, locale) => ({ ...previousValue, [locale]: "" }),
				{}
			) as LocalizedString,
		},
	];

	return (
		<div>
			{router.locales.map(locale => (
				<div key={locale}>
					<Link passHref href={`/${dir[locale]}`} locale={locale}>
						<StyledLink
							active={router.locale === locale}
							data-test-id="language-switcher-link"
						>
							{t(locale)}
						</StyledLink>
					</Link>
				</div>
			))}
		</div>
	);
};
