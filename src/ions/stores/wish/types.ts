export interface WishStore {
	id?: number;
	body?: string;
	subject?: string;
	setId(value?: number): void;
	setBody(value?: string): void;
	setSubject(value?: string): void;
}
