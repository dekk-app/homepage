import { StyledMasonryGrid } from "@/molecules/masonry/styled";
import React, { FC } from "react";

export interface MasonryGridProps {
	colCountXS?: number;
	colCountS?: number;
	colCountM?: number;
	colCountL?: number;
}
const MasonryGrid: FC<MasonryGridProps> = ({
	colCountXS = "var(--col-span)",
	colCountS = colCountXS,
	colCountM = colCountS,
	colCountL = colCountM,
	children,
	...props
}) => {
	return (
		<StyledMasonryGrid
			{...props}
			style={{
				"--col-count-xs": colCountXS,
				"--col-count-s": colCountS,
				"--col-count-m": colCountM,
				"--col-count-l": colCountL,
			}}
		>
			{children}
		</StyledMasonryGrid>
	);
};

export default MasonryGrid;
