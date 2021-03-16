import React from "react";

export const useMetaKey = () => {
	const [metaKey, setMetaKey] = React.useState(false);
	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			setMetaKey(e.metaKey);
		};
		const handleKeyUp = (e: KeyboardEvent) => {
			setMetaKey(e.metaKey);
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
