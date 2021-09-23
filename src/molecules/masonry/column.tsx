import { BoxProps } from "@/atoms/box";
import { StyledMasonryBox } from "@/molecules/masonry/styled";
import React, { FC } from "react";

const MasonryColumn: FC<BoxProps> = ({ aspectRatio, roundCorners, children, ...props }) => {
	return (
		<StyledMasonryBox {...props} aspectRatio={aspectRatio} roundCorners={roundCorners}>
			{children}
		</StyledMasonryBox>
	);
};

export default MasonryColumn;
