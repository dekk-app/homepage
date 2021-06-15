import { Column, Grid } from "@/molecules/grid";
import Layout from "@/organisms/layout";
import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import React, { FC, useMemo } from "react";

interface Props extends PageProps {
	data: { pageCollection: PageCollection };
}

const LegalPage: FC<Props> = ({ data }) => {
	const richText = useMemo(() => {
		const json = (data.pageCollection.items[0].body?.json as RichTextDocument) ?? null;
		return json ? documentToReactComponents(json) : null;
	}, [data]);

	return (
		<Layout>
			<Grid>
				<Column>{richText}</Column>
			</Grid>
		</Layout>
	);
};

export default LegalPage;
