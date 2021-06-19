import { a, h1, h2, h3, h4, p } from "@/atoms/typography/global";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ElementType } from "react";

export const StyledLink = styled.a<{ bold?: boolean }>`
	${a};
	${({ bold }) => css`
		font-weight: ${bold ? 600 : 400};
	`};
`;

interface StyledTypographyProps {
	raw?: boolean;
	centered?: boolean;
	as: ElementType;
}

export const StyledBodyText = styled.p<StyledTypographyProps>`
	${p};
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

export const StyledBody2Text = styled.p<StyledTypographyProps>`
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(20)};
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

export const StyledTitleText = styled.h1<StyledTypographyProps>`
	margin: 0;
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
	margin: 0;
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
