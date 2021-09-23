import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

export const StyledMasonryGrid = styled.div<{
	style?: CSSProperties & {
		"--col-count-xs"?: number | string;
		"--col-count-s"?: number | string;
		"--col-count-m"?: number | string;
		"--col-count-l"?: number | string;
	};
}>`
	--col-count: var(--col-count-xs);

	display: grid;
	grid-auto-flow: dense;
	grid-auto-rows: var(--gap-x);
	grid-gap: var(--gap-x);
	grid-template-columns: repeat(var(--col-count), 1fr);
	${({ theme }) => css`
		${theme.mq.s} {
			--col-count: var(--col-count-s);
		}
		${theme.mq.m} {
			--col-count: var(--col-count-m);
		}
		${theme.mq.l} {
			--col-count: var(--col-count-l);
		}
	`};
`;

export const StyledMasonryBox = styled.div<{
	colSpan?: number | string;
	rowSpan?: number | string;
}>`
	--col-span: var(--col-count);
	--row-span: 1;

	${({ theme, colSpan, rowSpan }) => css`
		${colSpan &&
		css`
			grid-column-end: span var(--col-span, 1);
		`};
		${rowSpan &&
		css`
			grid-row-end: span var(--row-span, 1);
		`};
		${theme.mq.s} {
			--col-span: ${colSpan};
			--row-span: ${rowSpan};
		}
	`};
`;
