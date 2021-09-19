import { Router } from "next/router";
import { useEffect, useMemo, useState } from "react";

export interface Options {
	shallow?: boolean;
}

export const useRouteLoader = () => {
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer: number;
		const start = (pathname: string, options: Options) => {
			if (!options.shallow) {
				setLoaded(false);
				setLoading(true);
			}
		};

		const end = (pathname: string, options: Options) => {
			if (!options.shallow) {
				setLoading(false);
				setLoaded(true);

				timer = window.setTimeout(() => {
					setLoaded(false);
				}, 250);
			}
		};

		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);

		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			window.clearTimeout(timer);
			setLoaded(false);
			setLoading(false);
		};
	}, []);

	return useMemo(() => ({ loaded, loading }), [loaded, loading]);
};
