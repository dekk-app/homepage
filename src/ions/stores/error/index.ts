import create from "zustand";
import { ErrorStore } from "./types";

export const useError = create<ErrorStore>(set => ({
	error: null,
	setError: error => {
		set({ error });
	},
}));
