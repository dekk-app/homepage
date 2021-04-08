import { useArtboardContext } from "@/ions/hooks/context";
import dynamic from "next/dynamic";
import React from "react";

const Artboard = dynamic(async () => import("@/molecules/artboard"));

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

export default React.memo(Artboards);
