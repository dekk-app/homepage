import { Wish } from "@/types/backend-api";

export type UpdateCallback = (previousWish: Wish) => Partial<Wish>;

export interface WishlistState {
	wishes: Wish[];
	add(wish: Wish): void;
	update(id: number, callback: UpdateCallback): void;
}
