import { camelToSnake } from "@dekk-utils/string-case/camel/snake";
import { snakeToCamel } from "@dekk-utils/string-case/snake/camel";

export const convertObjectKeys = <T>(
	object: Record<string, T>,
	algorithm: (value: string) => string
): Record<string, T> => {
	const nextObject = {};
	for (const key in object) {
		if (Object.prototype.hasOwnProperty.call(object, key)) {
			const nextKey = algorithm(key);
			nextObject[nextKey] = object[key];
		}
	}

	return nextObject;
};

export const objectSnakeToCamel = <T>(object: Record<string, T>): Record<string, T> =>
	convertObjectKeys<T>(object, snakeToCamel);

export const objectCamelToSnake = <T>(object: Record<string, T>): Record<string, T> =>
	convertObjectKeys<T>(object, camelToSnake);
