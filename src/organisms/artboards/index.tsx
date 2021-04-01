import { useArtboardContext } from "@/ions/hooks/context";
import { Artboard } from "@/molecules/artboard";
import React from "react";

const Artboards: React.FC = () => {
	const { artboards, select } = useArtboardContext();
	return (
		<>
			{artboards.map(artboard => {
				return (
					<Artboard
						key={artboard.id}
						artboard={artboard}
						onContextMenu={() => {
							select(artboard);
						}}
					/>
				);
			})}
		</>
	);
};

export default Artboards;
