import { SizeWithUnit } from "@/types/units";
import { CSSProperties } from "react";

export interface SpinnerProps {
	color?: string;
	size?: SizeWithUnit;
	strokeWidth?: SizeWithUnit;
	style?: CSSProperties;
	className?: string;
}
