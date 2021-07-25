import { BasePropsWithInnerRef } from "@/types/components";

export type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type ColSpan = ColCount;
// ToDo This should work but causes rendering issues.
//  The calc function does not return the desired result
// export type CSSVariable = `var(${string})`;
// export type CalcFunction = `calc(${string})`;
// export type ColSpan = ColCount | CalcFunction | CSSVariable;
export type ColStart = ColCount;

export interface StyledColumnProps {
	colSpanXS?: ColSpan;
	colSpanS?: ColSpan;
	colSpanM?: ColSpan;
	colSpanL?: ColSpan;
	colStartXS?: ColStart;
	colStartS?: ColStart;
	colStartM?: ColStart;
	colStartL?: ColStart;
}

export interface ColumnProps extends StyledColumnProps, BasePropsWithInnerRef<HTMLDivElement> {}
