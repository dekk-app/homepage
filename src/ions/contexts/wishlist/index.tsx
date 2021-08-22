import { Wish } from "@/types/backend-api";
import React, {
	createContext,
	FC,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { UpdateCallback, WishlistState } from "./types";

export const WishlistContext = createContext<WishlistState>({
	wishes: [],
	error: null,
	add() {
		/**/
	},
	update() {
		/**/
	},
	setError() {
		/**/
	},
});

export const WishlistProvider: FC<{ initialState: Wish[] }> = ({ children, initialState }) => {
	const [wishes, setWishes] = useState<Wish[]>(initialState);
	const [error, setError] = useState<string | null>(null);

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

	useEffect(() => {
		setWishes(initialState);
	}, [initialState]);

	const context = useMemo(
		() => ({
			wishes,
			add,
			update,
			setError,
			error,
		}),
		[add, wishes, update, setError, error]
	);

	return <WishlistContext.Provider value={context}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => useContext(WishlistContext);
