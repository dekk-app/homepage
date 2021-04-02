export const setOpacity = (hex: string, alpha: number) =>
	`${hex}${Math.round(alpha * 255)
		.toString(16)
		.padStart(2, "0")}`;
