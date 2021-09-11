import create from "zustand";
import { QueryStore } from "./types";

export const useSearchQuery = create<QueryStore>(set => ({
	query: "",
	setQuery: query => {
		set({ query });
	},
}));
