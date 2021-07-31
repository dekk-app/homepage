import { CSSProperties } from "react";

export type SizeWithUnit = `${number}px` | `${number}rem` | `${number}em`;

export interface SpinnerProps {
	color?: string;
	size?: SizeWithUnit;
	strokeWidth?: SizeWithUnit;
	style?: CSSProperties;
	className?: string;
}
