export const setOpacity = (hexColor: string, opacity: number) =>
	`${hexColor}${Math.round((255 / 100) * opacity).toString(16)}`;
