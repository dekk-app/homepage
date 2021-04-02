import React from "react";

export const PositionContext = React.createContext({
	x: 0,
	y: 0,
	z: 1,
	height: 0,
	width: 0,
	zoom(dir: number, m: number) {
		/**/
	},
	setX(n: number) {
		/**/
	},
	setY(n: number) {
		/**/
	},
	setZ(n: number) {
		/**/
	},
});
