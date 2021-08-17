import ContentfulImage from "@/atoms/contentful-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { simpleOptions } from "../../simple-options";
import { StyledSlot, StyledSlotColumn } from "../styled";
import { ImageTextSlotProps } from "./types";

const ImageTextSlot = ({ entry, flip }: ImageTextSlotProps) => {
	return (
		<StyledSlot stretch>
			<StyledSlotColumn colSpanM={4} colSpanL={6} order={flip ? 2 : 1}>
				{entry.imageCollection.items.map(item => {
					return (
						<ContentfulImage
							key={item.sys.id}
							src={item.url}
							height={item.height}
							width={item.width}
							alt={item.description}
							layout="responsive"
						/>
					);
				})}
			</StyledSlotColumn>
			<StyledSlotColumn colSpanM={4} colSpanL={6} order={flip ? 1 : 2}>
				{documentToReactComponents(entry.text.json, simpleOptions)}
			</StyledSlotColumn>
		</StyledSlot>
	);
};

export default ImageTextSlot;
