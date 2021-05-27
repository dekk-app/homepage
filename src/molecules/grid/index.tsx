import { pxToRem } from "@/ions/utils/unit";
import { BasePropsWithInnerRef } from "@/types/components";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { FC } from "react";

export interface StyledColumnProps {
	colSpanXS?: number;
	colSpanS?: number;
	colSpanM?: number;
	colSpanL?: number;
	colStartXS?: number;
	colStartS?: number;
	colStartM?: number;
	colStartL?: number;
}

export interface ColumnProps extends StyledColumnProps, BasePropsWithInnerRef<HTMLDivElement> {}

const GridBase = styled.div`
	display: grid;
	grid-column-gap: var(--gap-x, 1rem);
	grid-row-gap: var(--gap-y, 1rem);
	grid-template-columns: repeat(var(--col-count), 1fr);
	${({ theme }) => css`
		--gap-x: ${pxToRem(theme.spaces.m)};
		--gap-y: ${pxToRem(theme.spaces.m)};
		max-width: ${pxToRem(theme.breakpoints.l)};
	`};
`;

const StyledGrid = styled(GridBase)`
	--col-count: 2;

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

const StyledRow = styled(GridBase)`
	--col-count: var(--col-span);

	width: 100%;
`;

const StyledColumn = styled.div<StyledColumnProps>`
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

export const Grid: FC<BasePropsWithInnerRef<HTMLDivElement>> = ({ innerRef, ...props }) => (
	<StyledGrid {...props} ref={innerRef} />
);

export const Row: FC<BasePropsWithInnerRef<HTMLDivElement>> = ({ innerRef, ...props }) => (
	<StyledRow {...props} ref={innerRef} />
);

export const Column: FC<ColumnProps> = ({ innerRef, ...props }) => (
	<StyledColumn {...props} ref={innerRef} />
);
