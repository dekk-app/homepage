import Layout from "@/groups/layout";
import { DocumentToReact } from "@/molecules/document-to-react";
import { Column, Grid } from "@/molecules/grid";
import { PageCollection } from "@/types/contentful-api";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface LegalPageProps {
	data: { pageCollection: PageCollection };
}

const LegalPage: FC<LegalPageProps> = ({ data, children }) => {
	const { t } = useTranslation(["meta"]);
	const { route } = useRouter();
	return (
		<Layout
			title={
				route === "/legal/privacy-policy"
					? t("meta:legal.privacy-policy.title")
					: route === "/legal/terms-of-service"
					? t("meta:legal.terms-of-service.title")
					: t("meta:legal.imprint.title")
			}
		>
			<Head>
				<meta key="robots" name="robots" content="noindex,nofollow" />
			</Head>
			<Grid>
				<Column>
					<DocumentToReact
						json={(data.pageCollection.items[0].body?.json as RichTextDocument) ?? null}
					/>
				</Column>
				<Column>{children}</Column>
			</Grid>
		</Layout>
	);
};

export default LegalPage;
