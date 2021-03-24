import React from "react";

export interface UseDragProps {
	x?: number;
	y?: number;
	onDragStart?(): void;
	onDrag?(c: { dX: number; dY: number }): void;
	onDragEnd?(c: { dX: number; dY: number }): void;
}

export const useDrag = <T extends Element>(
	dragRef: React.MutableRefObject<T>,
	{ onDragEnd, onDrag, onDragStart, x: initialX, y: initialY }: UseDragProps = {}
) => {
	const [startX, setStartX] = React.useState(0);
	const [startY, setStartY] = React.useState(0);
	const [dX, setDX] = React.useState(0);
	const [dY, setDY] = React.useState(0);
	const [x, setX] = React.useState(initialX);
	const [y, setY] = React.useState(initialY);
	const [down, setDown] = React.useState(false);
	const [dragging, setDragging] = React.useState(false);

	React.useEffect(() => {
		const handleMouseMove = ({ pageX, pageY }: MouseEvent) => {
			if (!down) {
				return;
			}

			const _dX = pageX - startX;
			const _dY = pageY - startY;
			setDX(_dX);
			setDY(_dY);
			if (dragging) {
				if (onDrag) {
					onDrag({ dX: _dX, dY: _dY });
				}

				return;
			}

			setDragging(true);
			if (onDragStart) {
				onDragStart();
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [down, startX, startY, dragRef, dragging, onDrag, onDragStart]);

	React.useEffect(() => {
		const { current } = dragRef;
		const handleMouseDown = (event_: MouseEvent) => {
			const { pageX, pageY, buttons } = event_;
			event_.stopPropagation();
			if (buttons === 1) {
				setStartX(pageX);
				setStartY(pageY);
				setDown(true);
			}
		};

		if (current) {
			current.addEventListener("mousedown", handleMouseDown);
		}

		return () => {
			if (current) {
				current.removeEventListener("mousedown", handleMouseDown);
			}
		};
	}, [dragRef]);

	React.useEffect(() => {
		const handleMouseUp = () => {
			if (dragging && onDragEnd) {
				onDragEnd({ dX, dY });
			}

			setDragging(false);
			setDown(false);
			setX(currentValue => currentValue + dX);
			setY(currentValue => currentValue + dY);
			setDX(0);
			setDY(0);
		};

		window.addEventListener("mouseup", handleMouseUp);
		return () => {
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, [dX, dY, onDragEnd, dragging]);

	if (down) {
		return { x: x + dX, y: y + dY, down, dX, dY };
	}

	return { x, y, down, setX, setY, dX, dY };
};
