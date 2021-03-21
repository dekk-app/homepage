import React from "react";

export const useWindowResize = (callback: () => void) => {
	React.useEffect(() => {
		callback();
		window.addEventListener("resize", callback);
		return () => {
			window.removeEventListener("resize", callback);
		};
	}, [callback]);
};
