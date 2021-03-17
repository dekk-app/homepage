import React from "react";

export const useMetaKey = () => {
	const [metaKey, setMetaKey] = React.useState(false);
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			setMetaKey(event.metaKey);
		};

		const handleKeyUp = (event: KeyboardEvent) => {
			setMetaKey(event.metaKey);
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
