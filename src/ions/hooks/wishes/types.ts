import { Wish } from "@/types/backend-api";

export interface UpdateCallback {
	(previousWish: Wish): Partial<Wish>;
}
export interface WishlistState {
	wishes: Wish[];
	add(wish: Wish): void;
	update(id: number, callback: UpdateCallback): void;
}

export interface WishState {
	subject?: string;
	body?: string;
	changeBody(value: string): void;
	changeSubject(value: string): void;
}

export interface WishModalState {
	isOpen?: boolean;
	id?: number;
	body?: string;
	subject?: string;
	open(id?: number, subject?: string, body?: string): void;
	close(): void;
	toggle(requestedState?: boolean): void;
}
