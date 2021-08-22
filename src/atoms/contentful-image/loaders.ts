import { ImageLoader } from "next/image";

export const contentful: ImageLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};
