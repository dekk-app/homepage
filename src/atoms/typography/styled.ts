import { a, h1, h2, h3, h4, p } from "@/atoms/typography/global";
import { StyledLinkProps, StyledTypographyProps } from "@/atoms/typography/types";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLink = styled.a<StyledLinkProps>`
	${a};
	display: inline-flex;
	position: relative;
	width: max-content;

	&::after {
		position: absolute;
		pointer-events: none;
	}

	&:focus {
		outline: 0;
	}

	${({ theme, bold, isActive }) => css`
		font-weight: ${bold ? 600 : 400};

		&:focus-visible {
			&::after {
				content: "";
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${theme.ui.colors.focusRing.border};
			}
		}

		&::after {
			content: ${isActive ? "''" : "initial"};
			top: ${pxToRem(-theme.spaces.xs)};
			right: ${pxToRem(-theme.spaces.xs)};
			bottom: ${pxToRem(-theme.spaces.xs)};
			left: ${pxToRem(-theme.spaces.xs)};
			border-radius: ${theme.shapes.s};
			background: ${theme.ui.atoms.button.focus.background};
		}
	`};
`;

export const StyledBodyText = styled.p<StyledTypographyProps>`
	${p};
	${({ centered, raw, light }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
		${light &&
		css`
			opacity: 0.85;
		`};
	`}
`;

export const StyledBody2Text = styled.p<StyledTypographyProps>`
	margin: ${pxToRem(16)} 0;
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(20)};
	${({ centered, raw, light }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
		${light &&
		css`
			opacity: 0.8;
		`};
	`}
`;

export const StyledTitleText = styled.h1<StyledTypographyProps>`
	margin: ${pxToRem(32)} 0;
	font-size: ${pxToRem(34)};
	font-weight: 700;
	line-height: ${pxToRem(38)};
	${({ centered, raw, theme }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
		@media only screen and ${theme.mq.m} {
			font-size: ${pxToRem(65)};
			line-height: ${pxToRem(72)};
		}
	`}
`;

export const StyledSubTitleText = styled.h2<StyledTypographyProps>`
	margin: ${pxToRem(16)} 0;
	font-size: ${pxToRem(20)};
	font-weight: 600;
	line-height: ${pxToRem(30)};
	${({ centered, raw }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
	`}
`;

export const StyledH1Text = styled.h1<StyledTypographyProps>`
	${h1};
	${({ centered, raw }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
	`}
`;

export const StyledH2Text = styled.h2<StyledTypographyProps>`
	${h2};
	${({ centered, raw }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
	`}
`;

export const StyledH3Text = styled.h3<StyledTypographyProps>`
	${h3}
	${({ centered, raw }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
	`}
`;

export const StyledH4Text = styled.h3<StyledTypographyProps>`
	${h4};
	${({ centered, raw }) => css`
		${raw &&
		css`
			margin: 0;
		`};
		${centered &&
		css`
			text-align: center;
		`};
	`}
`;
