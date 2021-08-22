import { useCookieConsentContext } from "@/ions/contexts/cookie-consent";
import React, {
	createContext,
	FC,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { CookieConsentModalState } from "./types";

export const CookieConsentModalContext = createContext<CookieConsentModalState>({
	open() {
		/**/
	},
	close() {
		/**/
	},
	toggle() {
		/**/
	},
});

export const CookieConsentModalProvider: FC = ({ children }) => {
	const { consent } = useCookieConsentContext();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(Object.keys(consent).length === 0);
	}, [consent]);

	const open = useCallback(() => {
		setIsOpen(true);
	}, []);

	const close = useCallback(() => {
		setIsOpen(false);
	}, []);

	const toggle = useCallback((requestedState?: boolean) => {
		if (typeof requestedState === "boolean") {
			setIsOpen(requestedState);
		} else {
			setIsOpen(previousState => !previousState);
		}
	}, []);

	const context = useMemo(
		() => ({
			isOpen,
			open,
			close,
			toggle,
		}),
		[isOpen, open, close, toggle]
	);

	return (
		<CookieConsentModalContext.Provider value={context}>
			{children}
		</CookieConsentModalContext.Provider>
	);
};

export const useCookieConsentModal = () => useContext(CookieConsentModalContext);
