import { mq, palette, shapes } from "@/ions/theme";
import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { css, Global } from "@emotion/react";
import React from "react";

export const a = css`
	display: inline-flex;
	color: currentColor;
	font-weight: 600;
	line-height: ${pxToRem(28)};
	text-decoration: none;
	vertical-align: baseline;

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
	${mq.m} {
		font-size: ${pxToRem(55)};
		line-height: ${pxToRem(60)};
	}
`;

export const h2 = css`
	margin: ${pxToRem(32)} 0;
	font-size: ${pxToRem(24)};
	font-weight: 600;
	line-height: ${pxToRem(30)};
	${mq.m} {
		font-size: ${pxToRem(42)};
		line-height: ${pxToRem(48)};
	}
`;

export const h3 = css`
	margin: ${pxToRem(24)} 0;
	font-size: ${pxToRem(20)};
	font-weight: 600;
	line-height: ${pxToRem(28)};
	${mq.m} {
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
		padding: ${pxToRem(14)};
		border: 0;
		border-radius: ${shapes.s};
		background: rgba(0, 0, 0, 0.1);
		color: currentColor;
		font-family: inherit;
		font-size: 1em;
		font-weight: 600;
		line-height: inherit;

		&:hover {
			background: ${setOpacity(palette.purple, 20)};
		}
	}
`;
export const GlobalTypography = () => <Global styles={globalTypography} />;
