import create from "zustand";
import { createModal } from "./create";
import { ModalState } from "./types";

export const useAddWishModal = create<ModalState>(createModal);
