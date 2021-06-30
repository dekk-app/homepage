import { BreakLines } from "@/atoms/break-lines";
import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import React from "react";

export const options: Options = {
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
