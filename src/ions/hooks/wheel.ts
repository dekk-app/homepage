import React from "react";

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
