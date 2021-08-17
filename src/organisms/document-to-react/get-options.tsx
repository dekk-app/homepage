import { PageBodyLinks } from "@/types/contentful-api";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import dynamic from "next/dynamic";
import React from "react";
import { simpleOptions } from "./simple-options";
import { EntryBlock } from "./types";

const ImageTextSlot = dynamic(async () => import("./slots/image-text"));
const PersonSlot = dynamic(async () => import("./slots/person"));

export const getOptions = (links: PageBodyLinks): Options => {
	// Block linked entries
	const entryBlockMap: Map<string, EntryBlock> = new Map();
	// This counter is used to decide if we should flip a block
	let blockCounter = 0;
	for (const entry of links.entries.block) {
		entryBlockMap.set(entry.sys.id, entry);
	}

	return {
		...simpleOptions,
		renderNode: {
			...simpleOptions.renderNode,
			[BLOCKS.EMBEDDED_ENTRY]: ({ data: { target } }) => {
				const entry = entryBlockMap.get((target as EntryBlock).sys.id);
				blockCounter += 1;
				const flip = blockCounter % 2 === 1;
				switch (entry.__typename) {
					case "ImageText":
						return <ImageTextSlot entry={entry} flip={flip} />;
					case "Person":
						return <PersonSlot entry={entry} flip={flip} />;
					default:
						return null;
				}
			},
		},
	};
};
