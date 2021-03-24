import { ArtboardContext } from "@/ions/contexts/artboard";
import { usePositionContext } from "@/ions/hooks/position";
import { ArtboardType, Coordinates } from "@/types";
import React from "react";
import { v4 as uuid } from "uuid";

const ArtboardProvider: React.FC = ({ children }) => {
	const [artboards, setArtboards] = React.useState([]);
	const [selected, setSelected] = React.useState(null);
	const position = usePositionContext();

	const add = React.useCallback(
		(coordinates: Coordinates) => {
			setArtboards(previousState => {
				const x = (coordinates.x - position.x) / position.z;
				const y = (coordinates.y - position.y) / position.z;
				return [...previousState, { x, y, height: 200, width: 200, id: uuid() }];
			});
		},
		[position]
	);

	const remove = React.useCallback(() => {
		setArtboards(previousState => previousState.filter(({ id }) => id !== selected?.id));
	}, [selected]);

	const update = React.useCallback((id: string, partialArtboard: Partial<ArtboardType>) => {
		setArtboards(previousState =>
			previousState.map(artboard => {
				if (artboard.id === id) {
					return { ...artboard, ...partialArtboard };
				}

				return artboard;
			})
		);
	}, []);

	const select = React.useCallback(artboard => {
		setSelected(artboard);
	}, []);

	const context = React.useMemo(() => ({ remove, add, artboards, select, selected, update }), [
		remove,
		add,
		artboards,
		select,
		selected,
		update,
	]);

	return <ArtboardContext.Provider value={context}>{children}</ArtboardContext.Provider>;
};

export default ArtboardProvider;
