import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ElementType } from "react";

export const StyledLink = styled.a`
	color: currentColor;
	font-weight: 600;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}

	${({
		theme: {
			ui: {
				colors: {
					primary: { background },
				},
			},
		},
	}) => css`
		&:focus {
			outline: 0;
		}

		&:focus-visible {
			outline: 1px solid ${background};
			outline-offset: 3px;
		}
	`};
`;

interface StyledTypographyProps {
	raw?: boolean;
	centered?: boolean;
	as: ElementType;
}

export const StyledBodyText = styled.p<StyledTypographyProps>`
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(24)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(16)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH1Text = styled.h1<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(45)};
	font-weight: 700;
	line-height: ${pxToRem(63)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH2Text = styled.h2<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(40)};
	font-weight: 700;
	line-height: ${pxToRem(54)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH3Text = styled.h3<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(20)};
	font-weight: 700;
	line-height: ${pxToRem(28)};
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(12)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;
