import IconButton from "@/atoms/icon-button";
import { shadows } from "@/ions/theme";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SnackbarBackgrounds, SnackbarColors, StyledSnackbarProps } from "./types";

export const StyledSnackbar = styled.div<StyledSnackbarProps>`
	display: grid;
	grid-template-columns: 1fr auto;
	width: ${pxToRem(600)};
	${({ theme, level, fixed }) => css`
		${fixed &&
		css`
			position: fixed;
			z-index: 5;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			box-shadow: ${shadows.l};
		`};
		grid-gap: ${pxToRem(theme.spaces.xs)};
		max-width: ${fixed ? `calc(100% - ${pxToRem(2 * theme.spaces.l)})` : "100%"};
		margin: ${pxToRem(theme.spaces.m)} 0;
		padding: ${pxToRem(theme.spaces.s)} ${pxToRem(theme.spaces.m)};
		border-radius: ${theme.shapes.s};
		background: ${theme.palette[backgroundColors[level]]};
		color: ${colors[level]};
	`};
`;

const backgroundColors: SnackbarBackgrounds = {
	default: "dark",
	warning: "yellow",
	info: "blue",
	error: "red",
};

const colors: SnackbarColors = {
	default: "white",
	warning: "black",
	info: "black",
	error: "white",
};

export const StyledSnackbarButton = styled(IconButton)`
	align-self: center;
	${({ theme }) => css`
		margin: ${pxToRem(-theme.spaces.s)} ${pxToRem(-theme.spaces.xs)};
	`};
`;

export const StyledSnackbarMessage = styled.div``;
