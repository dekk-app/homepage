export const seconds = (n: number) => n;
export const minutes = (n: number) => n * seconds(60);
export const hours = (n: number) => n * minutes(60);
export const days = (n: number) => n * hours(24);
