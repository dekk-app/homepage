import { RemValue } from "@/types/units";

export const rem = (size: number, baseSize = 16) => size / baseSize;
export const pxToRem = (pixels: number): RemValue => `${rem(pixels)}rem`;
