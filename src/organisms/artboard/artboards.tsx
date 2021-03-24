import { useArtboardContext } from "@/ions/hooks/context";
import { useDrag } from "@/ions/hooks/drag";
import { usePositionContext } from "@/ions/hooks/position";
import { ArtboardType } from "@/types";
import styled from "@emotion/styled";
import React from "react";
import { useMouse } from "react-use";

export const StyledArtboard = styled.div`
	visibility: visible;
	position: absolute;
	top: 0;
	left: 0;
	background: white;
	pointer-events: all;
`;

export interface ArtboardProps {
	artboard: ArtboardType;
	onMouseDown?(): void;
	onClick?(): void;
	onContextMenu?(): void;
}

export const Artboard: React.FC<ArtboardProps> = ({
	artboard,
	onMouseDown,
	onClick,
	onContextMenu,
}) => {
	const { z } = usePositionContext();
	const [x, setX] = React.useState(artboard.x);
	const [y, setY] = React.useState(artboard.y);
	const ref = React.useRef<HTMLDivElement>();
	const { update } = useArtboardContext();
	const { id } = artboard;

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
		/>
	);
};

const Artboards: React.FC = () => {
	const { artboards, select } = useArtboardContext();
	return (
		<>
			{artboards.map(artboard => (
				<Artboard
					key={artboard.id}
					artboard={artboard}
					onContextMenu={() => {
						select(artboard);
					}}
				/>
			))}
		</>
	);
};

export default Artboards;
