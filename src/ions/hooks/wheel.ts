import React from "react";

export const useWheel = <T extends Element>(ref: React.MutableRefObject<T>) => {
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

		window.addEventListener("keyup", handleKeyUp);

		if (ref.current) {
			ref.current.addEventListener("wheel", handleWheel, { passive: true });
			const unsubscribe = () => {
				ref.current.removeEventListener("wheel", handleWheel);
			};

			return () => {
				unsubscribe();
				window.removeEventListener("keyup", handleKeyUp);
			};
		}

		return () => {
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, [ref]);

	return { dX, dY, dZ, timestamp };
};
