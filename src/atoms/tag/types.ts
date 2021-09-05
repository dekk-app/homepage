import { Palette } from "@/types/theme";

export interface StyledTagProps {
	colorScheme: keyof Palette;
}

export interface TagProps extends StyledTagProps {}
