import { setOpacity } from "@/ions/utils/color";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xxl)} 0;
	`};
`;

export const StyledFooterItems = styled(Column)`
	a {
		display: block;
	}

	${({ theme }) => css`
		@media only screen and ${theme.mq.m} {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
			a {
				display: inline-block;
				margin-left: ${pxToRem(theme.spaces.m)};
			}
		}
	`};
`;

export const StyledFooterInlineItems = styled(Column)`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	justify-content: flex-end;
	${({ theme }) => css`
		a {
			display: inline-flex;
			align-content: center;
			align-items: center;
			margin-left: ${pxToRem(theme.spaces.m)};
		}
	`};
`;

export const StyledLanguageButton = styled.button`
	display: inline-flex;
	position: relative;
	align-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	border: 0;
	background: none;
	color: currentColor;
	font-size: 1em;

	&::after {
		position: absolute;
		pointer-events: none;
	}

	&:focus {
		outline: 0;
	}

	${({ theme }) => css`
		margin-left: ${pxToRem(theme.spaces.m)};

		&:hover {
			&::after {
				content: "";
				background: ${setOpacity(theme.palette.purple, 30)};
			}
		}

		&:focus-visible {
			&::after {
				content: "";
				box-shadow: inset 0 0 0 ${theme.borders.focusRing}
					${theme.ui.colors.focusRing.border};
			}
		}

		&::after {
			top: ${pxToRem(-theme.spaces.xs)};
			right: ${pxToRem(-theme.spaces.xs)};
			bottom: ${pxToRem(-theme.spaces.xs)};
			left: ${pxToRem(-theme.spaces.xs)};
			border-radius: ${theme.shapes.s};
			background: ${theme.ui.atoms.button.focus.background};
		}
	`}; ;
`;
