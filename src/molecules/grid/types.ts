import { BasePropsWithInnerRef } from "@/types/components";
import { ElementType } from "react";

export type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type CSSVariable = `var(${string})`;
/** CalcFunction works but causes rendering issues in some cases.
 *  The repeat function requires a positive <integer> while the calc function
 *  could return a <number>
 *  Divisions will never work, while multiplications, subtractions and additions
 *  will not work if one side is a <number>
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-notation}
 *  @link {@see https://drafts.csswg.org/css-values-3/#calc-type-checking}
 */
export type CalcFunction = `calc(${string})`;
export type ColSpan = ColCount | CalcFunction | CSSVariable;
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
	order?: number;
}

export interface ColumnProps extends StyledColumnProps, BasePropsWithInnerRef<HTMLDivElement> {
	as?: ElementType;
}

export interface StyledGridProps {
	stretch?: boolean;
}

export interface GridProps extends StyledGridProps, BasePropsWithInnerRef<HTMLDivElement> {}
