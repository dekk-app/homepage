import create from "zustand";
import { createModal } from "./create";
import { ModalState } from "./types";

export const useSigninModal = create<ModalState>(createModal);
