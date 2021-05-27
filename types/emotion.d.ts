import "@emotion/react";
import { Theme as ThemeType } from "@/types/theme";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}
