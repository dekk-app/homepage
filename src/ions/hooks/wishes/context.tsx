import { Wish } from "@/types/backend-api";
import React, { createContext, FC } from "react";

export interface WishlistState {
	wishes: Wish[];
	create(): void;
}

export const WishlistContext = createContext<WishlistState>({
	wishes: [],
	create() {
		/**/
	},
});

export const WishlistProvider: FC<{ value: WishlistState }> = ({ children, value }) => {
	return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export interface WishState {
	subject?: string;
	body?: string;
}

export const WishContext = createContext<WishState>({});

export const WishProvider: FC<{ wish: WishState }> = ({ children, wish }) => {
	return <WishContext.Provider value={wish}>{children}</WishContext.Provider>;
};
