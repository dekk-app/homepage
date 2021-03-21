import { ArtboardContextProps } from "@/types";
import React from "react";

export const ArtboardContext = React.createContext<ArtboardContextProps>({
	artboards: [],
	selected: null,
	add() {
		/**/
	},
	remove() {
		/**/
	},
	select() {
		/**/
	},
});
