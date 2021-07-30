import { UseEscapeKeyCallback } from "@/ions/hooks/escapeKey/types";
import { useEffect } from "react";

export const useEscapeKey = (callback: UseEscapeKeyCallback) => {
	useEffect(() => {
		const handleKeyDown = (event_: KeyboardEvent) => {
			if (event_.key === "Escape") {
				callback();
			}
		};

		const unsubscribe = () => {
			window.removeEventListener("keyup", handleKeyDown);
		};

		window.addEventListener("keyup", handleKeyDown);

		return unsubscribe;
	}, [callback]);
};
