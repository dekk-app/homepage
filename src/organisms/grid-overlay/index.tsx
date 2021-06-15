import {
	StyledGridOverlay,
	StyledGridToggle,
	StyledOverlayColumn,
	StyledOverlayGrid,
} from "@/organisms/grid-overlay/styled";
import React, { FC, useState } from "react";

const OverlayGrid: FC = () => {
	const [grid, setGrid] = useState(false);
	return (
		<>
			<StyledGridToggle
				onClick={() => {
					setGrid(previousState => !previousState);
				}}
			>
				{grid ? "🚫" : "✅"}
			</StyledGridToggle>
			{grid && (
				<StyledGridOverlay>
					<StyledOverlayGrid>
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
						<StyledOverlayColumn colSpanS={1} />
					</StyledOverlayGrid>
				</StyledGridOverlay>
			)}
		</>
	);
};

export default OverlayGrid;
