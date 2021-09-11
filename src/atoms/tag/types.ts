import { Palette } from "@/types/theme";
import { ElementType, EventHandler, MouseEvent } from "react";

export interface StyledTagProps {
	colorScheme: keyof Palette;
	as?: ElementType;
	onClick?: EventHandler<MouseEvent>;
}

export interface TagProps extends StyledTagProps {}
