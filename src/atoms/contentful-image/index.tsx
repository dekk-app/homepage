import Image, { ImageProps } from "next/image";
import React, { FC } from "react";
import { contentful } from "./loaders";

const ContentfulImage: FC<ImageProps> = props => {
	return <Image {...props} loader={contentful} />;
};

export default ContentfulImage;
