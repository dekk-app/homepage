import { CookieFirst } from "@/types";
import { useEffect, useState } from "react";

export const useCookieFirst = () => {
	const [cookieFirst, setCookieFirst] = useState<CookieFirst | null>(null);
	useEffect(() => {
		const subscribe = () => {
			const maxTries = 100;
			let counter = 0;
			let timeout: number;
			const setTimeout = (delay = 100) =>
				window.setTimeout(() => {
					counter++;
					if (window.CookieFirst) {
						setCookieFirst(window.CookieFirst);
					} else if (counter < maxTries) {
						timeout = setTimeout();
					}
				}, delay);
			timeout = setTimeout();
			return () => {
				window.clearTimeout(timeout);
			};
		};

		return subscribe();
	}, []);
	return cookieFirst;
};
