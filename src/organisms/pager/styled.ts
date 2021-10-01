import { StyledButton } from "@/atoms/button/styled";
import { StyledIconButton } from "@/atoms/icon-button/styled";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledPagers = styled.div<{ fullWidth?: boolean }>`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0;
	user-select: none;

	${StyledButton} {
		width: ${pxToRem(48)};
		height: ${pxToRem(48)};
		margin: 0;
		padding: 0;
	}

	${StyledIconButton} {
		margin: 0;
	}

	${({ fullWidth }) => css`
		width: ${fullWidth ? "100%" : "max-content"};
	`};
`;

export const StyledPager = styled.span`
	display: flex;
	justify-content: center;
	font-weight: 400;
	line-height: ${pxToRem(24)};
	white-space: nowrap;
`;

export const StyledCurrentPage = styled(StyledPager)`
	min-width: ${pxToRem(48)};
	font-weight: 600;
	${({ theme }) => css`
		padding: 0 ${pxToRem(theme.spaces.xs)};
		color: ${theme.palette.blue};
	`}
`;

export const StyledSelectWrapper = styled.div`
	display: flex;
	position: relative;
	align-self: stretch;
`;

export const StyledSelectIconWrapper = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	pointer-events: none;
	${({ theme }) => css`
		right: ${pxToRem(theme.spaces.xs)};
	`}
`;

export const StyledSelect = styled.select`
	display: flex;
	min-width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	appearance: none;
	border: 0;
	background: none;
	color: inherit;
	font-family: inherit;
	font-size: 1em;
	font-weight: 600;
	line-height: ${pxToRem(24)};

	&:focus {
		outline: 0;
	}

	${({ theme }) => css`
		padding: 0 ${pxToRem(24 + theme.spaces.s)} 0 ${pxToRem(theme.spaces.s)};
		border-radius: ${theme.shapes.s};

		&:focus-visible {
			box-shadow: inset 0 0 0 ${theme.borders.focusRing} ${theme.ui.colors.focusRing.border};
		}

		&:hover {
			background-color: ${theme.ui.atoms.button.hover.background};
		}
	`};
`;

export const StyledPagersWrapper = styled.div`
	display: flex;
	flex: 1;
	align-content: center;
	align-items: center;
	justify-content: center;
`;
