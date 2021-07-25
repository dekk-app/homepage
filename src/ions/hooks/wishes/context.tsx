import { Wish } from "@/types/backend-api";
import React, { createContext, FC, useCallback, useMemo, useState } from "react";
import { UpdateCallback, WishlistState, WishModalState, WishState } from "./types";

export const WishlistContext = createContext<WishlistState>({
	wishes: [],
	add() {
		/**/
	},
	update() {
		/**/
	},
});

export const WishlistProvider: FC<{ initialState: Wish[] }> = ({ children, initialState }) => {
	const [wishes, setWishes] = useState<Wish[]>(initialState);

	const add = useCallback((wish: Wish) => {
		setWishes(previousState => [wish, ...previousState]);
	}, []);

	const update = useCallback((id: number, callback: UpdateCallback) => {
		setWishes(previousState =>
			previousState.map(previousWish => {
				if (previousWish.id === id) {
					const partialWish = callback(previousWish);
					return { ...previousWish, ...partialWish };
				}

				return previousWish;
			})
		);
	}, []);

	const context = useMemo(
		() => ({
			wishes,
			add,
			update,
		}),
		[add, wishes, update]
	);

	return <WishlistContext.Provider value={context}>{children}</WishlistContext.Provider>;
};

export const WishContext = createContext<WishState>({
	changeBody() {
		/**/
	},
	changeSubject() {
		/**/
	},
});

export const WishProvider: FC = ({ children }) => {
	const [subject, setSubject] = useState<string | undefined>();
	const [body, setBody] = useState<string | undefined>();

	const changeBody = useCallback((value: string) => {
		setBody(value);
	}, []);
	const changeSubject = useCallback((value: string) => {
		setSubject(value);
	}, []);

	const context = useMemo(
		() => ({
			body,
			subject,
			changeSubject,
			changeBody,
		}),
		[body, subject, changeBody, changeSubject]
	);

	return <WishContext.Provider value={context}>{children}</WishContext.Provider>;
};

export const WishModalContext = createContext<WishModalState>({
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

export const WishModalProvider: FC = ({ children }) => {
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

	return <WishModalContext.Provider value={context}>{children}</WishModalContext.Provider>;
};
