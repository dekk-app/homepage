import React, { createContext, FC, useContext, useMemo } from "react";
import { ProvidersState } from "./types";

export const ProvidersContext = createContext<ProvidersState>({
	providers: {},
});

export const ProvidersProvider: FC<ProvidersState> = ({ children, providers }) => {
	const context = useMemo(
		() => ({
			providers,
		}),
		[providers]
	);

	return <ProvidersContext.Provider value={context}>{children}</ProvidersContext.Provider>;
};

export const useProviders = () => useContext(ProvidersContext);
