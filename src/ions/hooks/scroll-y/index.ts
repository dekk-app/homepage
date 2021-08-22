import { useEffect, useState } from "react";

export const useScrollY = (active?: boolean) => {
	const [scrollY, setScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		const unsubscribe = () => {
			window.removeEventListener("scroll", handleScroll);
		};

		if (active) {
			window.addEventListener("scroll", handleScroll, { passive: true });
		}

		return unsubscribe;
	}, [active]);
	return scrollY;
};
