import { IconName } from "@/ions/icons/types";
import { CSSProperties } from "react";

export interface IconProps {
	icon: IconName;
	style?: CSSProperties;
	className?: string;
}
