import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";

export const globalStyles = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}

	body {
		width: 100%;
		min-width: ${pxToRem(320)};
		max-width: 100vw;
		min-height: 100vh;
		margin: 0;

		&.dark-mode {
			/* dark mode */
			-webkit-font-smoothing: antialiased;
		}
		&.light-mode {
			/* light mode */
		}
	}
	#__next {
		display: contents;
	}
`;
