export const fps = (frames: number) => 1000 / frames;
export const inRange = (value: number, min: number, max: number) => value < max && value > min;
export const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));
export const snap = (value: number, grid: number, method: "floor" | "ceil" | "round" = "round") =>
	Math[method](value / grid) * grid;
