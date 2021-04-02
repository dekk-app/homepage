import React from "react";
import { Except } from "type-fest";

export const useBoundingClientRect = <T extends Element>(ref: React.MutableRefObject<T>) => {
	const [boundingClientRect, setBoundingClientRect] = React.useState<Except<DOMRect, "toJSON">>({
		height: 0,
		width: 0,
		x: 0,
		y: 0,
		bottom: 0,
		left: 0,
		right: 0,
		top: 0,
	});
	React.useEffect(() => {
		const handleResize = () => {
			if (ref.current) {
				const {
					height,
					width,
					x,
					y,
					bottom,
					left,
					right,
					top,
				} = ref.current.getBoundingClientRect();
				setBoundingClientRect({ height, width, x, y, bottom, left, right, top });
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize, { passive: true });
		const unsubscribe = () => {
			window.removeEventListener("resize", handleResize);
		};

		return () => {
			unsubscribe();
		};
	}, [ref]);
	return boundingClientRect;
};
