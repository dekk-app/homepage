import { PositionContextProps } from "@/types";
import React from "react";

export const PositionContext = React.createContext<PositionContextProps>({
	x: 0,
	y: 0,
	z: 1,
	height: 0,
	width: 0,
	zoom() {
		/**/
	},
	setX() {
		/**/
	},
	setY() {
		/**/
	},
	setZ() {
		/**/
	},
});
