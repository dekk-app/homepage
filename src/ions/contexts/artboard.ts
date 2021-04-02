import { ArtboardContextProps } from "@/types";
import React from "react";

export const ArtboardContext = React.createContext<ArtboardContextProps>({
	artboards: [],
	selected: null,
	focused: null,
	add() {
		/**/
	},
	remove() {
		/**/
	},
	update() {
		/**/
	},
	select() {
		/**/
	},
	focus() {
		/**/
	},
	inject() {
		/**/
	},
});
