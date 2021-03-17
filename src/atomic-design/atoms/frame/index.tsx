import { clamp, inRange } from "@/utils/number";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

import React from "react";

export const StyledFrame = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const StyledInnerFrame = styled(StyledFrame)`
	transform-origin: 0 0;
`;
export const StyledOuterFrame = styled(StyledFrame)`
	overflow: hidden;
	background: #212121;
`;

import { useMouse } from "react-use";

export const useWheel = () => {
	const [dZ, setDZ] = React.useState(0);
	const [dX, setDX] = React.useState(0);
	const [dY, setDY] = React.useState(0);
	const [timestamp, setTimestamp] = React.useState(0);
	React.useEffect(() => {
		const handleWheel = ({ deltaX, deltaY, metaKey }: WheelEvent) => {
			if (metaKey) {
				setDZ(deltaY);
			} else {
				setDY(deltaY);
				setDX(deltaX);
			}

			setTimestamp(Date.now());
		};

		const handleKeyUp = ({ metaKey }: KeyboardEvent) => {
			if (!metaKey) {
				setDZ(0);
				setDX(0);
				setDY(0);
				setTimestamp(Date.now());
			}
		};

		window.addEventListener("wheel", handleWheel);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("wheel", handleWheel);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return { dX, dY, dZ, timestamp };
};

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
		const handleMouseDown = ({ pageX, pageY, buttons }: MouseEvent) => {
			if (buttons === 1) {
				setStartX(pageX);
				setStartY(pageY);
				setDown(true);
			}
		};

		current.addEventListener("mousedown", handleMouseDown);
		return () => {
			current.removeEventListener("mousedown", handleMouseDown);
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

export interface UseXYZProps<T> {
	factor?: number;
	min?: number;
	max?: number;
}

export const useXYZ = <T extends Element>(
	ref: React.MutableRefObject<T>,
	{ factor = 0.99, min = 0.1, max = 2 }: UseXYZProps<T>
) => {
	const { x, y, setX, setY } = useDrag<T>(ref, { x: 0, y: 0 });
	const { elX, elY } = useMouse(ref);
	const { dZ, dX, dY, timestamp } = useWheel();
	const [z, setZ] = React.useState(1);
	const element = React.useMemo(() => ({ x: elX, y: elY, timestamp }), [timestamp]);
	React.useEffect(() => {
		const _f = dZ < 0 ? 1 / factor : factor;
		if (Math.abs(dZ) > 0) {
			setZ(previousState => {
				const nextState = clamp(previousState * _f, min, max);
				if (inRange(nextState, min, max)) {
					if (setX) {
						setX(
							previousState_ =>
								previousState_ - (element.x - previousState_) * (_f - 1)
						);
					}
					if (setY) {
						setY(
							previousState_ =>
								previousState_ - (element.y - previousState_) * (_f - 1)
						);
					}
					return previousState * _f;
				}
				return previousState;
			});
		} else {
			if (setX) {
				setX(previousState => previousState - dX / _f);
			}
			if (setY) {
				setY(previousState => previousState - dY / _f);
			}
		}
	}, [dX, dY, dZ, element, factor, min, max, setX, setY]);

	return {
		x,
		y,
		z,
		ref,
	};
};

export const noBounce = css`
	html {
		overflow: hidden;
	}
`;

export const globalStyles = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}
	body {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;
	}
	#__next {
		display: contents;
	}
`;
export const Frame: React.FC = ({ children, ...props }) => {
	const ref = React.useRef(null);
	const { x, y, z } = useXYZ<HTMLDivElement>(ref, { factor: 0.99, min: 0.1, max: 2 });

	return (
		<>
			<Global styles={globalStyles} />
			<Global styles={noBounce} />
			<StyledOuterFrame {...props} ref={ref} data-test-id="outer-frame">
				<StyledInnerFrame
					style={{ transform: `translate(${x}px, ${y}px) scale(${z}, ${z})` }}
					data-test-id="inner-frame"
				>
					{children}
				</StyledInnerFrame>
			</StyledOuterFrame>
		</>
	);
};
