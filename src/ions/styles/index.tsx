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
		display: grid;
		grid-template-areas: "Header" "Main" " Footer";
		grid-template-columns: 1fr;
		grid-template-rows: 4rem 1fr 4rem;
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;

		@media (min-width: 800px) {
			grid-template-areas: "Header Header Header" "SidebarLeft Main SidebarRight" "Footer Footer Footer";
			grid-template-columns: 19rem 1fr 19rem;
			grid-template-rows: 4rem 1fr 4rem;
		}
	}
	#__next {
		display: contents;
	}
`;
