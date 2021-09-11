import { useEffect, useState } from "react";

export const useScrollY = (active = false) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (active) {
				setScrollY(window.scrollY);
			} else {
				setScrollY(0);
			}
		};

		const unsubscribe = () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("orientationchange", handleScroll);
		};

		if (active) {
			window.addEventListener("scroll", handleScroll, { passive: true });
			window.addEventListener("resize", handleScroll, { passive: true });
			window.addEventListener("orientationchange", handleScroll, { passive: true });
		}

		return unsubscribe;
	}, [active]);
	return scrollY;
};
