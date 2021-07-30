import React, { createContext, FC, useCallback, useContext, useMemo, useState } from "react";
import { SigninModalState } from "./types";

export const SigninModalContext = createContext<SigninModalState>({
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

export const SigninModalProvider: FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

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

	return <SigninModalContext.Provider value={context}>{children}</SigninModalContext.Provider>;
};

export const useSigninModal = () => useContext(SigninModalContext);
