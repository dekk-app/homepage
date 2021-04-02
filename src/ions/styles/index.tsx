import { css } from "@emotion/react";

export const noBounce = css`
	html {
		overflow: hidden;
	}
`;

export const noSelect = css`
	* {
		user-select: none;
	}
	input {
		&[type="text"],
		&[type="number"],
		&[type="password"],
		&[type="email"],
		&[type="search"],
		&[type="url"],
		&[type="date"],
		&[type="time"],
		&[type="week"],
		&[type="month"],
		&[type="datetime-local"],
		&[type="tel"] {
			user-select: text;
		}
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
		width: 100vw;
		max-width: 100vw;
		min-height: 100vh;
		margin: 0;
		overflow-x: hidden;
		overflow-y: auto;

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
