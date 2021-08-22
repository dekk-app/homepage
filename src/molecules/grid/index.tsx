import React, { FC } from "react";
import { StyledColumn, StyledGrid, StyledRow } from "./styled";
import { ColumnProps, GridProps } from "./types";

export const Grid: FC<GridProps> = ({ innerRef, ...props }) => (
	<StyledGrid {...props} ref={innerRef} />
);

export const Row: FC<GridProps> = ({ innerRef, ...props }) => (
	<StyledRow {...props} ref={innerRef} />
);

export const Column: FC<ColumnProps> = ({ innerRef, ...props }) => (
	<StyledColumn {...props} ref={innerRef} />
);
