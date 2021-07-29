import { GlobalTypography } from "@/atoms/typography/global";
import Layout from "@/colonies/layout";
import { DocumentToReact } from "@/molecules/document-to-react";
import { Column, Grid } from "@/molecules/grid";
import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { css, Global, useTheme } from "@emotion/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props extends PageProps {
	data: { pageCollection: PageCollection };
}

const LegalPage: FC<Props> = ({ data, children }) => {
	const theme = useTheme();
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
			<GlobalTypography />
			<Global
				styles={css`
					body {
						background-color: ${theme.ui.colors.light.background};
						color: ${theme.ui.colors.light.color};
					}
				`}
			/>
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
