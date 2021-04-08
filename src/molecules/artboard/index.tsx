import { useArtboardContext } from "@/ions/hooks/context";
import { useDrag } from "@/ions/hooks/drag";
import { usePositionContext } from "@/ions/hooks/position";
import { ArtboardProps, ArtboardType } from "@/types";
import React from "react";
import { StyledArtboard, StyledArtboardTitle } from "./styled";

export interface InBoundRuler {
	x: number;
	y: number;
	z: number;
	height: number;
	width: number;
}
export const inBound = (artboard: ArtboardType, { x, y, z, height, width }: InBoundRuler) => {
	const top = (artboard.y + artboard.height) * z + y > 0;
	const right = artboard.x * z < width - x;
	const bottom = artboard.y * z < height - y;
	const left = (artboard.x + artboard.width) * z + x > 0;
	return top && right && bottom && left;
};

const Artboard: React.FC<ArtboardProps> = ({ artboard, onMouseDown, onClick, onContextMenu }) => {
	const { z } = usePositionContext();
	const [x, setX] = React.useState(artboard.x);
	const [y, setY] = React.useState(artboard.y);
	const ref = React.useRef<HTMLDivElement>();
	const { update } = useArtboardContext();
	const { id } = artboard;
	// Const { x: pX, y: pY, z: pZ, height, width } = usePositionContext();
	// const shouldRender = React.useMemo(
	//	() => inBound(artboard, { height, width, x: pX, y: pY, z: pZ }),
	//	[pX, pY, pZ, height, width, artboard]
	// );
	const onDragEnd = React.useCallback(
		({ dX, dY }: { dX: number; dY: number }) => {
			const _x = x + dX / z;
			const _y = y + dY / z;
			setX(_x);
			setY(_y);
			update(id, { x: _x, y: _y });
		},
		[id, x, y, z, update]
	);

	const onDrag = React.useCallback(
		({ dX, dY }: { dX: number; dY: number }) => {
			const _x = x + dX / z;
			const _y = y + dY / z;
			update(id, { x: _x, y: _y });
		},
		[id, x, y, z, update]
	);

	useDrag<HTMLDivElement>(ref, {
		onDrag,
		onDragEnd,
	});

	return (
		<StyledArtboard
			ref={ref}
			style={{
				height: artboard.height,
				width: artboard.width,
				transform: `translate3d(${artboard.x}px, ${artboard.y}px, 0)`,
			}}
			data-test-id="artboard"
			onMouseDown={onMouseDown}
			onClick={onClick}
			onContextMenu={onContextMenu}
		>
			<StyledArtboardTitle style={{ transform: `scale(${1 / z})`, maxWidth: 1600 * z }}>
				{artboard.title}
			</StyledArtboardTitle>
		</StyledArtboard>
	);
};

export default React.memo(Artboard);
