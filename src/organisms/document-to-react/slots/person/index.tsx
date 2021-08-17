import ContentfulImage from "@/atoms/contentful-image";
import Typography from "@/atoms/typography";
import { Column } from "@/molecules/grid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { simpleOptions } from "../../simple-options";
import { StyledSlot, StyledSlotColumn } from "../styled";
import { PersonSlotProps } from "./types";

const PersonSlot = ({ entry, flip }: PersonSlotProps) => {
	const { picture, biography, name } = entry;
	return (
		<StyledSlot stretch>
			<Column>
				<Typography centered variant="title" component="h2">
					{name}
				</Typography>
			</Column>
			<StyledSlotColumn colSpanM={4} order={flip ? 1 : 2}>
				<ContentfulImage
					key={picture.sys.id}
					src={picture.url}
					height={picture.height}
					width={picture.width}
					alt={picture.description}
					layout="responsive"
				/>
			</StyledSlotColumn>
			<StyledSlotColumn colSpanM={4} colSpanL={8} order={flip ? 2 : 1}>
				{documentToReactComponents(biography.json, simpleOptions)}
			</StyledSlotColumn>
		</StyledSlot>
	);
};

export default PersonSlot;
