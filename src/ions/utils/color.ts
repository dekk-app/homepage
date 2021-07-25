export const setOpacity = (hexColor: string, opacity: number) =>
	`${hexColor}${`${opacity}`.padStart(2, "0")}`;
