export const range = (length: number, start = 0) =>
	Array.from({ length }).map((_, index) => index + start);
