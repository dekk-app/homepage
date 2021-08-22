import { Wish } from "@/types/backend-api";
import { Dispatch, SetStateAction } from "react";

export type UpdateCallback = (previousWish: Wish) => Partial<Wish>;

export interface WishlistState {
	wishes: Wish[];
	error: string;
	setError: Dispatch<SetStateAction<string>>;
	add(wish: Wish): void;
	update(id: number, callback: UpdateCallback): void;
}
