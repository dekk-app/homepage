import { useScrollbarWidth } from "@/ions/contexts/scrollbar-width";
import { pxToRem } from "@/ions/utils/unit";
import { useLayoutEffect } from "react";

export const useLockBodyScroll = () => {
	const scrollBarWidth = useScrollbarWidth();
	useLayoutEffect(() => {
		const originalOverflow = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = pxToRem(scrollBarWidth);
		return () => {
			document.body.style.overflow = originalOverflow;
			document.body.style.paddingRight = "";
		};
	}, [scrollBarWidth]);
};
