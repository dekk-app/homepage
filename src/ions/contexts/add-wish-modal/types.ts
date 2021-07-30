export interface AddWishModalState {
	isOpen?: boolean;
	id?: number;
	body?: string;
	subject?: string;
	open(id?: number, subject?: string, body?: string): void;
	close(): void;
	toggle(requestedState?: boolean): void;
}
