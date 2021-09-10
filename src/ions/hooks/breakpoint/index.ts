import { pxToRem } from "@/ions/utils/unit";
import { Sizes } from "@/types/theme";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";

export const useBreakpoint = (size: keyof Sizes, defaultState = false) => {
	const theme = useTheme();
	const query = `(min-width: ${pxToRem(theme.breakpoints[size])})`;
	const [state, setState] = useState(
		typeof window === "undefined" ? defaultState : window.matchMedia(query).matches
	);

	useEffect(() => {
		let mounted = true;
		const mediaQueryList = window.matchMedia(query);
		const onChange = () => {
			if (!mounted) {
				return;
			}

			setState(mediaQueryList.matches);
		};

		mediaQueryList.addEventListener("change", onChange);
		setState(mediaQueryList.matches);

		return () => {
			mounted = false;
			mediaQueryList.removeEventListener("change", onChange);
		};
	}, [query]);

	return state;
};
