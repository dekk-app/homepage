import { TagProps } from "@/atoms/tag/types";
import React, { FC } from "react";
import { StyledTag } from "./styled";

const Tag: FC<TagProps> = ({ children, colorScheme, ...props }) => (
	<StyledTag {...props} colorScheme={colorScheme}>
		{children}
	</StyledTag>
);

export default Tag;
