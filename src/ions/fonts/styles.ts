import { css } from "@emotion/react";

export const fontFace = css`
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 400;
		font-display: optional;
		src: local(""), url("/fonts/poppins-latin-400.woff2") format("woff2");
	}

	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-display: optional;
		src: local(""), url("/fonts/poppins-latin-600.woff2") format("woff2");
	}
	@font-face {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-display: optional;
		src: local(""), url("/fonts/poppins-latin-700.woff2") format("woff2");
	}
`;
