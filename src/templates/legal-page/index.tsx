import { GlobalTypography } from "@/atoms/typography/global";
import { DocumentToReact } from "@/molecules/document-to-react";
import { Column, Grid } from "@/molecules/grid";
import Layout from "@/organisms/layout";
import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import React, { FC } from "react";

interface Props extends PageProps {
	data: { pageCollection: PageCollection };
}

// Use abcq to encode numbers to strings

const LegalPage: FC<Props> = ({ data, children }) => {
	return (
		<Layout>
			<GlobalTypography />
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
export { CookiePolicy } from "@/templates/legal-page/cookie-policy";
