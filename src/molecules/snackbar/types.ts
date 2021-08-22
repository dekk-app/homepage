import { Palette } from "@/types/theme";

export type SnackbarLevel = "warning" | "info" | "error" | "default";

export type SnackbarBackgrounds = Record<SnackbarLevel, keyof Palette>;

export type SnackbarColor = "black" | "white";

export type SnackbarColors = Record<SnackbarLevel, SnackbarColor>;

export interface StyledSnackbarProps {
	level?: SnackbarLevel;
	fixed?: boolean;
}

export interface SnackbarProps extends StyledSnackbarProps {
	autoClose?: number;
	id: string;
	onClose?(): void;
}
