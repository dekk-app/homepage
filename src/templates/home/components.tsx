import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));

export const TextBox = styled(Column)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledGridOverlay = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0.05;
	pointer-events: none;
`;
export const StyledOverlayColumn = styled(Column)`
	height: 100%;
	background: magenta;
`;
export const StyledOverlayGrid = styled(Grid)`
	height: 100%;
	background: yellow;

	${StyledOverlayColumn} {
		&:nth-of-type(1) {
			display: none;
		}
		&:nth-of-type(2) {
			display: none;
		}
		&:nth-of-type(3) {
			display: none;
		}
		&:nth-of-type(4) {
			display: none;
		}
		&:nth-of-type(5) {
			display: none;
		}
		&:nth-of-type(6) {
			display: none;
		}
		&:nth-of-type(7) {
			display: none;
		}
		&:nth-of-type(8) {
			display: none;
		}
		@media screen and (min-width: 40rem) {
			&:nth-of-type(5) {
				display: unset;
			}
			&:nth-of-type(6) {
				display: unset;
			}
			&:nth-of-type(7) {
				display: unset;
			}
			&:nth-of-type(8) {
				display: unset;
			}
		}
		@media screen and (min-width: 60rem) {
			&:nth-of-type(1) {
				display: unset;
			}
			&:nth-of-type(2) {
				display: unset;
			}
			&:nth-of-type(3) {
				display: unset;
			}
			&:nth-of-type(4) {
				display: unset;
			}
		}
	}
`;
export const GridToggle = styled.button`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 48px;
	height: 48px;
	border: 0;
`;
export const OverlayGrid: React.FC = () => {
	const [grid, setGrid] = useState(false);
	return (
		<>
			<GridToggle
				onClick={() => {
					setGrid(previousState => !previousState);
				}}
			>
				{grid ? "🚫" : "✅"}
			</GridToggle>
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
