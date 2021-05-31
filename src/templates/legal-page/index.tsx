import { PageProps } from "@/types";
import { PageCollection } from "@/types/contentful-api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));

interface Props extends PageProps {
	data: { pageCollection: PageCollection };
}

const LegalPage: React.FC<Props> = ({ data }) => {
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
