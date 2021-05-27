import React from "react";

export const useWheel = <T extends Element>(ref: React.MutableRefObject<T>) => {
	const [dZ, setDZ] = React.useState(0);
	const [dX, setDX] = React.useState(0);
	const [dY, setDY] = React.useState(0);
	const [timestamp, setTimestamp] = React.useState(0);
	const { current } = ref;

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

		window.addEventListener("keyup", handleKeyUp);

		if (current) {
			current.addEventListener("wheel", handleWheel, { passive: true });
		}

		const unsubscribe = () => {
			window.removeEventListener("keyup", handleKeyUp);
			if (current) {
				current.removeEventListener("wheel", handleWheel);
			}
		};

		return () => {
			unsubscribe();
		};
	}, [current]);

	return { dX, dY, dZ, timestamp };
};
