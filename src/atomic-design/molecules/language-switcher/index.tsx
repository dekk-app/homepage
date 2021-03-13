import { StyledLink } from "@/atomic-design/atoms/active-link";
import { ErrorComponent } from "@/atomic-design/atoms/error-component";
import routes from "@/atomic-design/ions/routes";
import { LocalizedString } from "@/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
export const ROOT = "ROOT";

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
					<Link href={`/${dir[locale]}`} locale={locale}>
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
