export const rem = (size: number, baseSize = 16) => size / baseSize;
export const pxToRem = (pixels: number): `${number}rem` => `${rem(pixels)}rem`;
