import { fps } from "@/utils/number";
import React from "react";
import { useThrottledCallback } from "use-debounce";

export const useViewport = () => {
	const [height, setHeight] = React.useState(0);
	const [width, setWidth] = React.useState(0);

	const handleResize = useThrottledCallback(() => {
		const { innerHeight, innerWidth } = window;
		setHeight(innerHeight);
		setWidth(innerWidth);
	}, fps(10));

	React.useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);

	return { height, width };
};
