import Layout from "@/groups/layout";
import { RawBreadcrumb } from "@/ions/contexts/breadcrumbs/types";
import { Route } from "@/ions/routes";
import { Column, Grid } from "@/molecules/grid";
import Breadcrumbs from "@/organisms/breadcrumbs";
import { DocumentToReact } from "@/organisms/document-to-react";
import { Document as RichTextDocument } from "@contentful/rich-text-types/dist/types/types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, useMemo } from "react";
import { ContentPageProps } from "./types";

const breadcrumbTitles: Partial<Record<Route, string>> = {
	"/about-us": "navigation:about-us",
};

const ContentPage: FC<ContentPageProps> = ({ data, children }) => {
	const [entry] = data.pageCollection.items;
	const { t } = useTranslation(["navigation"]);
	const { route } = useRouter();
	const breadcrumbs: RawBreadcrumb[] = useMemo(
		() => [
			{
				href: "/",
				title: t("navigation:home"),
			},
			{
				href: route as Route,
				title: t(breadcrumbTitles[route as Route]),
			},
		],
		[route, t]
	);
	return (
		<Layout
			dark
			title={entry.seo.pageTitle}
			description={entry.seo.description}
			keywords={entry.seo.keywords?.join(",")}
			breadcrumbs={breadcrumbs}
		>
			<Grid>
				<Column>
					<Breadcrumbs />
					<DocumentToReact
						json={entry.body.json as RichTextDocument}
						links={entry.body.links}
					/>
				</Column>
				<Column>{children}</Column>
			</Grid>
		</Layout>
	);
};

export default ContentPage;
