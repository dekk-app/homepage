import { useArtboardContext } from "@/ions/hooks/context";
import React from "react";

const Artboards: React.FC = () => {
	const { artboards, select } = useArtboardContext();
	return (
		<>
			{artboards.map(artboard => (
				<div
					key={artboard.id}
					data-test-id="artboard"
					style={{
						position: "absolute",
						height: artboard.height,
						width: artboard.width,
						background: "magenta",
						transform: `translate3d(${artboard.x}px, ${artboard.y}px, 0)`,
					}}
					onContextMenu={() => {
						select(artboard);
					}}
				/>
			))}
		</>
	);
};

export default Artboards;
