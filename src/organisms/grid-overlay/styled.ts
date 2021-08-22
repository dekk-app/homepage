import { range } from "@/ions/utils/array";
import { Column, Grid } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledGridOverlay = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0.1;
	pointer-events: none;
`;

export const StyledOverlayColumn = styled(Column)`
	height: 100%;
	background: #f0f;
`;

export const StyledOverlayGrid = styled(Grid)`
	height: 100%;
	background: #ff0;

	${StyledOverlayColumn} {
		display: none;
		${({ theme }) => css`
			${range(theme.grid.colCount.xs).map(
				n => css`
					&:nth-of-type(${theme.grid.colCount.xl - n}) {
						display: unset !important;
					}
				`
			)};

			${theme.mq.s} {
				${range(theme.grid.colCount.s - theme.grid.colCount.xs, theme.grid.colCount.xs).map(
					n => css`
						&:nth-of-type(${theme.grid.colCount.xl - n}) {
							display: unset !important;
						}
					`
				)};
			}

			${theme.mq.m} {
				${range(theme.grid.colCount.m - theme.grid.colCount.s, theme.grid.colCount.s).map(
					n => css`
						&:nth-of-type(${theme.grid.colCount.xl - n}) {
							display: unset !important;
						}
					`
				)};
			}

			${theme.mq.l} {
				${range(theme.grid.colCount.l - theme.grid.colCount.m, theme.grid.colCount.m).map(
					n => css`
						&:nth-of-type(${theme.grid.colCount.xl - n}) {
							display: unset !important;
						}
					`
				)};
			}
		`};
	}
`;

export const StyledGridToggle = styled.button`
	display: flex;
	position: fixed;
	z-index: 101;
	bottom: 0;
	left: 0;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	margin: 0;
	padding: 0;
	border: 0;
	background: #fff;
	color: #000;

	&:hover {
		background: #333;
		color: #fff;
	}

	&:active {
		background: #000;
		color: #fff;
	}

	&:focus {
		outline: 0;
	}

	&:focus-visible {
		background: #666;
		color: #fff;
	}
`;
