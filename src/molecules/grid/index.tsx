import { BasePropsWithInnerRef } from "@/types/components";
import React, { FC } from "react";
import { StyledColumn, StyledGrid, StyledRow } from "./styled";
import { ColumnProps } from "./types";

export const Grid: FC<BasePropsWithInnerRef<HTMLDivElement>> = ({ innerRef, ...props }) => (
	<StyledGrid {...props} ref={innerRef} />
);

export const Row: FC<BasePropsWithInnerRef<HTMLDivElement>> = ({ innerRef, ...props }) => (
	<StyledRow {...props} ref={innerRef} />
);

export const Column: FC<ColumnProps> = ({ innerRef, ...props }) => (
	<StyledColumn {...props} ref={innerRef} />
);
