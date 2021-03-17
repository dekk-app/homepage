import { css } from "@emotion/react";

export const noBounce = css`
	html {
		overflow: hidden;
	}
`;

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
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;
	}
	#__next {
		display: contents;
	}
`;
