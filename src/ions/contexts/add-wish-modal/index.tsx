import React, { createContext, FC, useCallback, useContext, useMemo, useState } from "react";
import { AddWishModalState } from "./types";

export const AddWishModalContext = createContext<AddWishModalState>({
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

export const AddWishModalProvider: FC = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState<number | undefined>();
	const [body, setBody] = useState<string | undefined>();
	const [subject, setSubject] = useState<string | undefined>();

	const open = useCallback((wishId, previousSubject, previousBody) => {
		setId(wishId);
		setSubject(previousSubject);
		setBody(previousBody);
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
			body,
			subject,
			id,
		}),
		[isOpen, open, close, toggle, body, subject, id]
	);

	return <AddWishModalContext.Provider value={context}>{children}</AddWishModalContext.Provider>;
};

export const useAddWishModal = () => useContext(AddWishModalContext);
