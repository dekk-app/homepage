import create from "zustand";
import { createModal } from "./create";
import { ModalState } from "./types";

export const useCookieConsentModal = create<ModalState>(createModal);
