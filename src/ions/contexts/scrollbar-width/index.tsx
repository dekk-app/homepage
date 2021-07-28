import { scrollbarWidth } from "@xobotyi/scrollbar-width";
import React, { createContext, FC, useContext, useEffect, useState } from "react";

export const ScrollBarWidthContext = createContext(0);

export const ScrollBarWidthProvider: FC = ({ children }) => {
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setWidth(scrollbarWidth());
	}, []);
	return (
		<ScrollBarWidthContext.Provider value={width}>{children}</ScrollBarWidthContext.Provider>
	);
};

export const useScrollbarWidth = () => useContext(ScrollBarWidthContext);
