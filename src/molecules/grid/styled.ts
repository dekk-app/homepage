import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledColumnProps, StyledGridProps } from "./types";

const StyledGridBase = styled.div<StyledGridProps>`
	display: grid;
	grid-column-gap: var(--gap-x);
	grid-row-gap: var(--gap-y);
	grid-template-columns: repeat(var(--col-count), 1fr);
	width: 100%;
	${({ theme, stretch }) => css`
		align-content: ${stretch ? "stretch" : "start"};
		align-items: ${stretch ? "stretch" : "start"};
		max-width: ${pxToRem(theme.grid.maxWidth)};
	`};
`;

export const StyledGrid = styled(StyledGridBase)`
	flex: 1;
	margin: 0 auto;
	padding: 0 calc(var(--gap-x) / 2 + var(--grid-padding));
	${({ theme }) => css`
		--grid-padding: ${pxToRem(theme.grid.gridPadding.xs)};
		--gap-x: ${pxToRem(theme.grid.gutter.xs)};
		--gap-y: 0;
		--col-count: ${theme.grid.colCount.xs};

		${theme.mq.s} {
			--grid-padding: ${pxToRem(theme.grid.gridPadding.s)};
			--gap-x: ${pxToRem(theme.grid.gutter.s)};
			--col-count: ${theme.grid.colCount.s};
		}

		${theme.mq.m} {
			--grid-padding: ${pxToRem(theme.grid.gridPadding.m)};
			--gap-x: ${pxToRem(theme.grid.gutter.m)};
			--col-count: ${theme.grid.colCount.m};
		}

		${theme.mq.l} {
			--grid-padding: ${pxToRem(theme.grid.gridPadding.l)};
			--gap-x: ${pxToRem(theme.grid.gutter.l)};
			--col-count: ${theme.grid.colCount.l};
		}

		${theme.mq.xl} {
			--grid-padding: ${pxToRem(theme.grid.gridPadding.xl)};
			--gap-x: ${pxToRem(theme.grid.gutter.xl)};
			--col-count: ${theme.grid.colCount.xl};
		}
	`};
`;
export const StyledRow = styled(StyledGridBase)`
	--col-count: var(--col-span);
`;
export const StyledColumn = styled.div<StyledColumnProps>`
	grid-column-end: span var(--col-span, var(--col-count));
	${({
		theme,
		colStartXS,
		colStartS,
		colStartM,
		colStartL,
		colSpanXS = "var(--col-count)",
		colSpanS = colSpanXS,
		colSpanM = colSpanS,
		colSpanL = colSpanM,
		order,
	}) => css`
		--col-span: ${colSpanXS};
		${colStartXS &&
		css`
			grid-column-start: ${colStartXS};
		`};

		${theme.mq.s} {
			--col-span: ${colSpanS};
			${colStartS &&
			css`
				grid-column-start: ${colStartS};
			`};
		}

		${theme.mq.m} {
			--col-span: ${colSpanM};
			${colStartM &&
			css`
				grid-column-start: ${colStartM};
			`};
		}

		${theme.mq.l} {
			--col-span: ${colSpanL};
			${colStartL &&
			css`
				grid-column-start: ${colStartL};
			`};
		}
		order: ${order};
	`};
`;
