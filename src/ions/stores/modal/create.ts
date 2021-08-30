import { StateCreator } from "zustand/vanilla";
import { ModalState } from "./types";

export const createModal: StateCreator<ModalState> = (set): ModalState => ({
	isOpen: false,
	open: () => {
		set(() => ({ isOpen: true }));
	},
	close: () => {
		set(() => ({ isOpen: false }));
	},
	toggle: desiredState => {
		set(state => ({ isOpen: desiredState ?? !state.isOpen }));
	},
});
