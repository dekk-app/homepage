import "@emotion/react";
import { Theme as ThemeType } from "@/types/theme";

declare module "@emotion/react" {
	export interface Theme extends ThemeType {}
}

// You are also able to use a 3rd party theme this way:
import "@emotion/react";
import { LibTheme } from "some-lib";

declare module "@emotion/react" {
	export interface Theme extends LibTheme {}
}
