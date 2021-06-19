import { StyledList, StyledListItem } from "@/atoms/list/styled";
import React, { FC } from "react";

export const UnorderedList: FC = ({ children }) => (
	<StyledList raw component="ul">
		{children}
	</StyledList>
);

export const ListItem: FC = ({ children }) => (
	<StyledListItem component="li">{children}</StyledListItem>
);
