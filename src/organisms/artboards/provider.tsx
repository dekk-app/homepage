import { ArtboardContext } from "@/ions/contexts/artboard";
import { usePositionContext } from "@/ions/hooks/position";
import { findOuter } from "@/ions/utils/artboard";
import { ArtboardType, Coordinates } from "@/types";
import React from "react";
import { v4 as uuid } from "uuid";

const safeArea = 100;

const ArtboardsProvider: React.FC = ({ children }) => {
	const [artboards, setArtboards] = React.useState([]);
	const [selected, setSelected] = React.useState(null);
	const [focused, setFocused] = React.useState(null);
	const position = usePositionContext();
	const add = React.useCallback(
		(coordinates: Coordinates) => {
			setArtboards(previousState => {
				const x = (coordinates.x - position.x) / position.z;
				const y = (coordinates.y - position.y) / position.z;
				return [
					...previousState,
					{
						__typename: "Artboard",
						x,
						y,
						height: 900,
						width: 1600,
						id: uuid(),
						title: `Artboard ${previousState.length + 1}`,
					},
				];
			});
		},
		[position]
	);

	const inject = React.useCallback(() => {
		setArtboards(previousState => {
			const { x, y } = findOuter(previousState);
			console.log({ x, y });
			return [
				...previousState,
				{
					__typename: "Artboard",
					x: x + 1600 + safeArea,
					y,
					height: 900,
					width: 1600,
					id: uuid(),
					title: `Artboard ${previousState.length + 1}`,
				},
			];
		});
	}, []);

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

	const focus = React.useCallback(
		id => {
			setFocused(id);
			const { x, y, height, width } = artboards.find(artboard => artboard.id === id);
			const _w = window.innerWidth - 550 - safeArea * 2;
			const _x = (window.innerWidth - 550) / 2 + 250;
			const _y = (window.innerHeight - 60) / 2 + 60;
			const z = _w / width;
			position.setX(-x * z + _x - (width / 2) * z);
			position.setY(-y * z + _y - (height / 2) * z);
			position.setZ(z);
		},
		[position, artboards]
	);

	const context = React.useMemo(
		() => ({ remove, add, artboards, focus, focused, inject, select, selected, update }),
		[remove, add, artboards, focus, focused, inject, select, selected, update]
	);

	React.useEffect(() => {
		if (artboards.length === 0) {
			const x = 0;
			const y = 0;
			const width = 1600;
			const height = 900;
			const _w = window.innerWidth - 550 - safeArea * 2;
			const _x = (window.innerWidth - 550) / 2 + 250;
			const _y = (window.innerHeight - 60) / 2 + 60;
			const z = _w / width;
			position.setX(-x * z + _x - (width / 2) * z);
			position.setY(-y * z + _y - (height / 2) * z);
			position.setZ(z);
			add({ x, y });
		}
	}, [artboards, position, add]);

	return <ArtboardContext.Provider value={context}>{children}</ArtboardContext.Provider>;
};

export default ArtboardsProvider;
