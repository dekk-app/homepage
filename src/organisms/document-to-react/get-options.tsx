import { ImageText, PageBodyLinks } from "@/types/contentful-api";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import dynamic from "next/dynamic";
import React from "react";
import { simpleOptions } from "./simple-options";

const ImageTextSlot = dynamic(async () => import("./slots/image-text"));

export const getOptions = (links: PageBodyLinks): Options => {
	// Block linked entries
	const entryBlockMap: Map<string, ImageText> = new Map();
	for (const entry of links.entries.block) {
		entryBlockMap.set(entry.sys.id, entry);
	}

	return {
		...simpleOptions,
		renderNode: {
			...simpleOptions.renderNode,
			[BLOCKS.EMBEDDED_ENTRY]: node => {
				const entry = entryBlockMap.get((node.data.target as ImageText).sys.id);
				switch (entry.__typename) {
					case "ImageText":
						return <ImageTextSlot entry={entry} />;
					default:
						return null;
				}
			},
		},
	};
};
