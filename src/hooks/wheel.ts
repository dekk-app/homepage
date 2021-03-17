import { useMetaKey } from "@/hooks/meta-key";
import React from "react";
import { useThrottledCallback } from "use-debounce";

export const useWheel = (clear = 0, throttle = 0) => {
	const [deltaX, setDeltaX] = React.useState(0);
	const [deltaY, setDeltaY] = React.useState(0);
	const [timestamp, setTimestamp] = React.useState(0);
	const timer = React.useRef(0);
	const handleWheel = React.useCallback(
		(event: WheelEvent) => {
			window.clearTimeout(timer.current);
			if (clear) {
				timer.current = window.setTimeout(() => {
					setDeltaY(0);
					setDeltaX(0);
				}, clear);
			}

			setDeltaY(event.deltaY);
			setDeltaX(event.deltaX);
			setTimestamp(Date.now());
		},
		[clear]
	);

	const handleThrottledWheel = useThrottledCallback(handleWheel, throttle);
	React.useEffect(() => {
		if (throttle) {
			window.addEventListener("wheel", handleThrottledWheel);
		} else {
			window.addEventListener("wheel", handleWheel);
		}

		return () => {
			window.removeEventListener("wheel", handleThrottledWheel);
			window.removeEventListener("wheel", handleWheel);
		};
	}, [handleWheel, handleThrottledWheel, throttle]);
	return React.useMemo(() => ({ deltaX, deltaY, timestamp }), [timestamp, deltaX, deltaY]);
};

export const use3dWheel = (clear = 0, throttle = 0) => {
	const [deltaX, setDeltaX] = React.useState(0);
	const [deltaY, setDeltaY] = React.useState(0);
	const [deltaZ, setDeltaZ] = React.useState(0);
	const metaKey = useMetaKey();
	const { timestamp, ...wheel } = useWheel(clear, throttle);

	React.useEffect(() => {
		if (metaKey) {
			setDeltaX(0);
			setDeltaY(0);
			setDeltaZ(wheel.deltaY);
		} else {
			setDeltaX(wheel.deltaX);
			setDeltaY(wheel.deltaY);
			setDeltaZ(0);
		}
	}, [metaKey, wheel]);
	return React.useMemo(() => ({ deltaX, deltaY, deltaZ, timestamp }), [
		timestamp,
		deltaX,
		deltaY,
		deltaZ,
	]);
};
