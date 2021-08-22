import { BreakLines } from "@/atoms/break-lines";
import { StyledLink } from "@/atoms/typography/styled";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import dynamic from "next/dynamic";
import React from "react";

const Typography = dynamic(async () => import("@/atoms/typography"));

export const simpleOptions: Options = {
	renderMark: {
		[MARKS.BOLD]: text => <strong>{text}</strong>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return <Typography>{children}</Typography>;
		},
		[BLOCKS.HEADING_1]: (node, children) => <Typography variant="h1">{children}</Typography>,
		[BLOCKS.HEADING_2]: (node, children) => <Typography variant="h2">{children}</Typography>,
		[BLOCKS.HEADING_3]: (node, children) => <Typography variant="h3">{children}</Typography>,
		[BLOCKS.HEADING_4]: (node, children) => <Typography variant="h4">{children}</Typography>,
		[BLOCKS.UL_LIST]: (node, children) => <Typography component="ul">{children}</Typography>,
		[BLOCKS.LIST_ITEM]: (node, children) => <Typography component="li">{children}</Typography>,
		[INLINES.HYPERLINK]: (node, children) => {
			return (
				<StyledLink
					bold
					href={node.data.uri as string}
					rel="noreferrer nofollow"
					target="_blank"
				>
					{children}
				</StyledLink>
			);
		},
	},
	renderText: text => <BreakLines text={text} />,
};
