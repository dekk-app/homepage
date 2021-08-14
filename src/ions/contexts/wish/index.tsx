import React, { createContext, FC, useCallback, useContext, useMemo, useState } from "react";
import { WishState } from "./types";

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

export const useWish = () => useContext(WishContext);
