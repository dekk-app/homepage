import { mq, palette } from "@/ions/theme";
import { pxToRem } from "@/ions/utils/unit";
import { css, Global } from "@emotion/react";
import React from "react";

export const a = css`
	color: currentColor;
	font-weight: 600;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const p = css`
	margin: ${pxToRem(16)} 0;
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(28)};
`;

export const h1 = css`
	margin: ${pxToRem(32)} 0;
	font-size: ${pxToRem(28)};
	font-weight: 700;
	line-height: ${pxToRem(36)};
	@media only screen and ${mq.m} {
		font-size: ${pxToRem(55)};
		line-height: ${pxToRem(60)};
	}
`;

export const h2 = css`
	margin: ${pxToRem(32)} 0;
	font-size: ${pxToRem(24)};
	font-weight: 600;
	line-height: ${pxToRem(30)};
	@media only screen and ${mq.m} {
		font-size: ${pxToRem(42)};
		line-height: ${pxToRem(48)};
	}
`;

export const h3 = css`
	margin: ${pxToRem(24)} 0;
	font-size: ${pxToRem(20)};
	font-weight: 600;
	line-height: ${pxToRem(28)};
	@media only screen and ${mq.m} {
		font-size: ${pxToRem(24)};
		line-height: ${pxToRem(34)};
	}
`;

export const h4 = css`
	margin: ${pxToRem(16)} 0;
	font-size: ${pxToRem(16)};
	font-weight: 600;
	line-height: ${pxToRem(28)};
`;

export const globalTypography = css`
	h1 {
		${h1};
	}

	h2 {
		${h2};
	}

	h3 {
		${h3};
	}

	h4 {
		${h4};
	}

	p {
		${p};
	}

	a {
		${a};
	}

	button {
		margin-right: ${pxToRem(12)};
		padding: ${pxToRem(12)} ${pxToRem(18)};
		border: 0;
		background: none;
		color: ${palette.purple};
		font-size: ${pxToRem(14)};

		&:hover {
			color: ${palette.darkPurple};
		}
	}
`;
export const GlobalTypography = () => <Global styles={globalTypography} />;
