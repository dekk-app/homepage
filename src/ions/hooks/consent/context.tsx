import { ConsentState } from "@/types";
import React, { createContext, FC } from "react";

export const ConsentContext = createContext<ConsentState>({
	advertising: false,
	functional: false,
	necessary: true,
	performance: false,
	timestamp: 0,
});

export const ConsentProvider: FC<{ consent: ConsentState }> = ({ children, consent }) => {
	return <ConsentContext.Provider value={consent}>{children}</ConsentContext.Provider>;
};
