export const toString = (value: string | number) => `${value}`;
export const isBooleanString = (string: string) => string === "true" || string === "false";

export const increaseStringNumber = (value: string, step = 1) =>
	`${Number.parseFloat(value) + step}`;
export const decreaseStringNumber = (value: string, step = 1) =>
	`${Number.parseFloat(value) - step}`;
