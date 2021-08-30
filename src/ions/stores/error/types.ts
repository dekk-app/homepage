export interface ErrorStore {
	error: string | null;

	setError(value: string): void;
}
