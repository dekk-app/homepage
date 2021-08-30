import { Router } from "next/router";
import { useEffect, useMemo, useState } from "react";

export const useRouteLoader = () => {
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		let timer: number;
		const start = () => {
			setLoaded(false);
			setLoading(true);
		};

		const end = () => {
			setLoading(false);
			setLoaded(true);

			timer = window.setTimeout(() => {
				setLoaded(false);
				setLoading(false);
			}, 250);
		};

		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);

		const unsubscribe = () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			window.clearTimeout(timer);
			setLoaded(false);
			setLoading(false);
		};

		return unsubscribe;
	}, []);

	return useMemo(() => ({ loaded, loading }), [loaded, loading]);
};
