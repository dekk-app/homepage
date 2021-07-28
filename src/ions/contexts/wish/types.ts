export interface WishState {
	subject?: string;
	body?: string;
	changeBody(value: string): void;
	changeSubject(value: string): void;
}
