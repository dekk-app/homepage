import { pxToRem } from "@/ions/utils/unit";
import { StyledColumnProps } from "@/molecules/grid/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledGridBase = styled.div`
	display: grid;
	grid-column-gap: var(--gap-x, 1rem);
	grid-row-gap: var(--gap-y, 1rem);
	grid-template-columns: repeat(var(--col-count), 1fr);
	width: 100%;
	${({ theme }) => css`
		--gap-x: ${pxToRem(theme.spaces.m)};
		--gap-y: ${pxToRem(theme.spaces.m)};
		max-width: ${pxToRem(theme.breakpoints.l)};
	`};
`;
export const StyledGrid = styled(StyledGridBase)`
	--col-count: 2;
	--grid-padding: 1rem;

	margin: 0 auto;
	padding: 0 calc(var(--gap-x, 1rem) / 2 + var(--grid-padding, 1rem));
	${({ theme }) => css`
		@media screen and ${theme.mq.s} {
			--col-count: 4;
		}

		@media screen and ${theme.mq.m} {
			--col-count: 8;
		}

		@media screen and ${theme.mq.l} {
			--col-count: 12;
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
		colSpanXS,
		colSpanS = colSpanXS,
		colSpanM = colSpanS,
		colSpanL = colSpanM,
	}) => css`
		${colSpanXS &&
		css`
			--col-span: ${colSpanXS};
		`};
		${colStartXS &&
		css`
			grid-column-start: ${colStartXS};
		`};

		@media screen and ${theme.mq.s} {
			${colSpanS &&
			css`
				--col-span: ${colSpanS};
			`};
			${colStartS &&
			css`
				grid-column-start: ${colStartS};
			`};
		}

		@media screen and ${theme.mq.m} {
			${colSpanM &&
			css`
				--col-span: ${colSpanM};
			`};
			${colStartM &&
			css`
				grid-column-start: ${colStartM};
			`};
		}

		@media screen and ${theme.mq.l} {
			${colSpanL &&
			css`
				--col-span: ${colSpanL};
			`};
			${colStartL &&
			css`
				grid-column-start: ${colStartL};
			`};
		}
	`};
`;
