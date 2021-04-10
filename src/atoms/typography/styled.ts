import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ElementType } from "react";

export const StyledLink = styled.a`
	color: #3f5df8;
	font-weight: 600;
	text-decoration: none;
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

export const StyledBodyText = styled(motion.p)<StyledTypographyProps>`
	font-size: ${pxToRem(14)};
	line-height: ${pxToRem(24)};
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(16)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH1Text = styled(motion.h1)<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(45)};
	font-weight: 700;
	line-height: ${pxToRem(63)};
	text-align: center;
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH2Text = styled(motion.h2)<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(40)};
	font-weight: 700;
	line-height: ${pxToRem(54)};
	text-align: center;
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(32)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;

export const StyledH3Text = styled(motion.h3)<StyledTypographyProps>`
	padding: 0;
	font-size: ${pxToRem(20)};
	font-weight: 700;
	line-height: ${pxToRem(28)};
	text-align: center;
	${({ centered, raw }) => css`
		margin: 0 auto ${raw ? 0 : pxToRem(12)};
		text-align: ${centered ? "center" : "initial"};
	`}
`;
