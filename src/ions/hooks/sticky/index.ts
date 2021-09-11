import { MutableRefObject, RefObject, useEffect, useState } from "react";

export const useSticky = <T extends Element>(ref: MutableRefObject<T> | RefObject<T>) => {
	const [sticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (ref.current) {
				const refPageOffset = ref.current.getBoundingClientRect().top;
				const stickyOffset = Number.parseInt(window.getComputedStyle(ref.current).top, 10);
				setSticky(refPageOffset === stickyOffset);
			}
		};

		const unsubscribe = () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("orientationchange", handleScroll);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", handleScroll, { passive: true });
		window.addEventListener("orientationchange", handleScroll, { passive: true });

		return unsubscribe;
	}, [ref]);
	return sticky;
};
