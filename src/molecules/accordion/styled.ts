import { StyledSvg } from "@/atoms/icon/styled";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AccordionContentProps } from "./types";

export const StyledAccordionLabel = styled.div<{ ellipsis?: boolean }>`
	width: 100%;
	${({ ellipsis }) =>
		ellipsis &&
		css`
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		`};
`;
export const StyledAccordionButton = styled.button`
	display: flex;
	position: relative;
	align-content: flex-start;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	margin: 0;
	padding: ${pxToRem(12)} 0;
	border-radius: 0;
	background: none;
	font-size: 1em;
	font-weight: 600;
	line-height: 1.5;
	text-align: left;
	${({ theme }) => css`
		&::after {
			right: ${pxToRem(-theme.spaces.xs)};
			left: ${pxToRem(-theme.spaces.xs)};
			border-radius: ${theme.shapes.s};
		}

		&:focus-visible {
			&::after {
				content: "";
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${theme.ui.colors.focusRing.border};
			}
		}
	`};

	&::after {
		position: absolute;
		top: 0;
		bottom: 0;
		pointer-events: none;
	}

	&:hover {
		background: none;
		text-decoration: underline;
	}

	&:focus {
		outline: none;
	}

	${StyledSvg} {
		flex-shrink: 0;
	}
`;

export const StyledAccordionHeading = styled.h2`
	margin: 0;
	font-size: 1em;
`;

export const StyledAccordionContent = styled.section<AccordionContentProps>`
	${({ isExpanded, theme }) => css`
		display: ${isExpanded ? "block" : "none"};
		padding-bottom: ${pxToRem(theme.spaces.m)};
	`};
`;
