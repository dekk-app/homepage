export interface CookieConsentModalState {
	isOpen?: boolean;
	open(id?: number, subject?: string, body?: string): void;
	close(): void;
	toggle(requestedState?: boolean): void;
}
