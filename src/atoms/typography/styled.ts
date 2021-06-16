import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ElementType } from "react";

export const StyledLink = styled.a`
	color: currentColor;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

interface StyledTypographyProps {
	raw?: boolean;
	centered?: boolean;
	as: ElementType;
}

export const StyledBodyText = styled.p<StyledTypographyProps>`
	font-size: ${pxToRem(16)};
	line-height: ${pxToRem(28)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(16)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledBody2Text = styled.p<StyledTypographyProps>`
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(20)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(16)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledTitleText = styled.h1<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(65)};
	font-weight: 700;
	line-height: ${pxToRem(72)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledSubTitleText = styled.h2<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(20)};
	font-weight: 600;
	line-height: ${pxToRem(30)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH1Text = styled.h1<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(48)};
	font-weight: 700;
	line-height: ${pxToRem(55)};
	${({ centered, raw }) => css`
		margin: 0 0 ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH2Text = styled.h2<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(34)};
	font-weight: 600;
	line-height: ${pxToRem(38)};
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
