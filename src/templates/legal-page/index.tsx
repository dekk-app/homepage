import Typography from "@/atoms/typography";
import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Route } from "@/ions/routes";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import { DocumentToReact } from "@/organisms/document-to-react";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, useMemo } from "react";
import { LegalPageProps } from "./types";

const breadcrumbTitles: Partial<Record<Route, string>> = {
	"/legal/privacy-policy": "navigation:policy",
	"/legal/terms-of-service": "navigation:terms",
	"/legal/cookie-policy": "navigation:cookies",
};

const locales = { de, en: enUS };

const LegalPage: FC<LegalPageProps> = ({ data, children }) => {
	const [entry] = data.pageCollection.items;
	const { t } = useTranslation(["navigation", "meta", "common"]);
	const { locale, route } = useRouter();
	const breadcrumbs: RawBreadcrumb[] = useMemo(
		() =>
			route === "/legal"
				? [
						{
							href: "/",
							title: t("navigation:home"),
						},
						{
							href: "/legal",
							title: t("navigation:legal"),
						},
				  ]
				: [
						{
							href: "/",
							title: t("navigation:home"),
						},
						{
							href: "/legal",
							title: t("navigation:legal"),
						},
						{
							href: route as Route,
							title: t(breadcrumbTitles[route as Route]),
						},
				  ],
		[route, t]
	);
	const publishDate = useMemo(
		() =>
			format(new Date(entry.sys.publishedAt as string), "PPPPpppp", {
				locale: locales[locale] as Locale,
			}),
		[entry, locale]
	);
	return (
		<Layout
			title={entry.seo.pageTitle}
			description={entry.seo.description}
			keywords={entry.seo.keywords?.join()}
			robots={entry.seo.robots?.join()}
			breadcrumbs={breadcrumbs}
		>
			<Grid>
				<Column>
					<Breadcrumbs />
					<DocumentToReact json={(entry.body?.json as RichTextDocument) ?? null} />
				</Column>
				<Column>
					<Typography variant="subtitle" component="div">
						{t("common:updated-at")}
					</Typography>
					<Typography>
						<time dateTime={entry.sys.publishedAt as string}>{publishDate}</time>
					</Typography>
				</Column>
				{children && <Column>{children}</Column>}
			</Grid>
		</Layout>
	);
};

export default LegalPage;
