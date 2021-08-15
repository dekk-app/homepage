import ContentfulImage from "@/atoms/contentful-image";
import { StyledCenteredColumn } from "@/molecules/grid/styled-column";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { simpleOptions } from "../../simple-options";
import { StyledImageTextSlot } from "./styled";
import { ImageTextSlotProps } from "./types";

const ImageTextSlot = ({ entry }: ImageTextSlotProps) => {
	return (
		<StyledImageTextSlot>
			<StyledCenteredColumn colSpanM={4} style={{ position: "relative" }}>
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
			</StyledCenteredColumn>
			<StyledCenteredColumn colSpanM={4} colSpanL={8}>
				{documentToReactComponents(entry.text.json, simpleOptions)}
			</StyledCenteredColumn>
		</StyledImageTextSlot>
	);
};

export default ImageTextSlot;
