import create from "zustand";
import { WishStore } from "./types";

export const useWish = create<WishStore>(set => ({
	setId: id => {
		set({ id });
	},
	setBody: body => {
		set({ body });
	},
	setSubject: subject => {
		set({ subject });
	},
	clear: () => {
		set({ body: undefined, id: undefined, subject: undefined });
	},
}));
