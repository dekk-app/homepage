export interface SigninModalState {
	isOpen?: boolean;
	open(): void;
	close(): void;
	toggle(requestedState?: boolean): void;
}
