import { ArtboardProps } from "@/types";
import React from "react";
import { StyledArtboardPreview } from "./styled";

const ArtboardPreview: React.FC<ArtboardProps & { scale: number }> = ({ artboard, scale }) => {
	const ref = React.useRef<HTMLDivElement>();

	return (
		<StyledArtboardPreview
			ref={ref}
			style={{
				height: artboard.height * scale,
				width: artboard.width * scale,
			}}
			data-test-id="artboard"
		/>
	);
};

export default React.memo(ArtboardPreview);
