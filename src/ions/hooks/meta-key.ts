import React from "react";

export const useMetaKey = () => {
	const [metaKey, setMetaKey] = React.useState(false);
	React.useEffect(() => {
		const handleKeyDown = (event_: KeyboardEvent) => {
			setMetaKey(event_.metaKey);
		};

		const handleKeyUp = (event_: KeyboardEvent) => {
			setMetaKey(event_.metaKey);
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	return metaKey;
};
