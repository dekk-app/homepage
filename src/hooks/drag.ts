import React from "react";
import { useThrottledCallback } from "use-debounce";

export const useDrag = <T extends Element>(
	ref: React.MutableRefObject<T>,
	throttle: number = 0
) => {
	const [deltaX, setDeltaX] = React.useState(0);
	const [deltaY, setDeltaY] = React.useState(0);
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);
	const [initialX, setInitialX] = React.useState(0);
	const [initialY, setInitialY] = React.useState(0);
	const [timestamp, setTimestamp] = React.useState(0);
	const [down, setDown] = React.useState(false);
	const [dragging, setDragging] = React.useState(false);
	const handleMouseMove = React.useCallback(
		({ pageX, pageY }: MouseEvent) => {
			setDragging(true);
			setDeltaX(pageX - initialX);
			setDeltaY(pageY - initialY);
			setTimestamp(Date.now());
		},
		[initialX, initialY]
	);

	const handleThrottledMouseMove = useThrottledCallback(handleMouseMove, throttle);

	const handleMouseUp = React.useCallback(() => {
		setDragging(false);
		setDown(false);
		setX(prevState => prevState + deltaX);
		setY(prevState => prevState + deltaY);
		setInitialX(0);
		setInitialY(0);
		setDeltaX(0);
		setDeltaY(0);
	}, [deltaX, deltaY]);

	React.useEffect(() => {
		const handleMouseDown = ({ pageX, pageY }: MouseEvent) => {
			setDown(true);
			setInitialX(pageX);
			setInitialY(pageY);
			setDeltaX(0);
			setDeltaY(0);
		};

		const subscribe = () => {
			if (throttle) {
				window.addEventListener("mousemove", handleThrottledMouseMove);
			} else {
				window.addEventListener("mousemove", handleMouseMove);
			}
		};
		const unsubscribe = () => {
			ref.current?.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
			window.removeEventListener("mousemove", handleThrottledMouseMove);
			window.removeEventListener("mousemove", handleMouseMove);
		};

		if (down) {
			subscribe();
		} else {
			unsubscribe();
		}

		ref.current?.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			unsubscribe();
		};
	}, [handleMouseMove, handleThrottledMouseMove, handleMouseUp, throttle, down]);
	return React.useMemo(() => ({ x, y, deltaX, deltaY, dragging, down, timestamp }), [
		timestamp,
		deltaX,
		deltaY,
		x,
		y,
		dragging,
		down,
	]);
};
