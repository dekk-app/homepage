export interface ModalState {
	isOpen: boolean;
	open(): void;
	close(): void;
	toggle(desiredState?: boolean): void;
}
