import { StyledMasonryBox } from "@/molecules/masonry/styled";
import React, { CSSProperties, FC, RefObject, useEffect, useRef, useState } from "react";

export const closed = {};

export const getOpen = (column: number, row: number) => ({
	gridColumnStart: column,
	gridRowStart: row,
	gridColumnEnd: "span 2",
	gridRowEnd: "span 2",
});

export const useMasonryColumn = (
	ref: RefObject<HTMLDivElement>,
	isOpen: boolean,
	{ rowBig = "2", columnBig = "2" }
) => {
	const [style, setStyle] = useState<CSSProperties>(closed);
	useEffect(() => {
		const handleLayout = () => {
			if (isOpen && ref.current) {
				const { current: element } = ref;
				const { parentElement } = element;
				const parentComputedStyle = window.getComputedStyle(parentElement);
				const boundingClientRect = element.getBoundingClientRect();
				const parentPoundingClientRect = parentElement.getBoundingClientRect();

				// Columns
				const gridColumns = parentComputedStyle.gridTemplateColumns.split(" ");
				const { length: numberColumns } = gridColumns;

				// Rows
				const gridRows = parentComputedStyle.gridTemplateRows.split(" ");
				const { length: numberRows } = gridRows;
				// Positions
				const positionX = boundingClientRect.left - parentPoundingClientRect.left;
				const positionY = boundingClientRect.top - parentPoundingClientRect.top;
				// Dimensions
				const gridRowHeight =
					Number.parseFloat(gridRows[0]) +
					Number.parseFloat(parentComputedStyle.gridRowGap);
				const gridColumnWidth =
					Number.parseFloat(gridColumns[0]) +
					Number.parseFloat(parentComputedStyle.gridColumnGap);

				// Test next position
				element.style.gridColumnStart = "";
				element.style.gridRowStart = "";
				element.style.gridColumnEnd = `span ${columnBig}`;
				element.style.gridRowEnd = `span ${rowBig}`;

				const computedStyle = window.getComputedStyle(element);

				const width = Number.parseFloat(computedStyle.gridColumnEnd.split(" ")[1]);
				const height = Number.parseFloat(computedStyle.gridRowEnd.split(" ")[1]);

				// Get next position
				let row = Math.round(positionY / gridRowHeight) + 1;
				let column = Math.round(positionX / gridColumnWidth) + 1;

				if (row + height > numberRows) {
					row = numberRows - height + 1;
				}

				if (column + width > numberColumns) {
					column = numberColumns - width + 1;
				}

				setStyle({
					gridColumnStart: column,
					gridRowStart: row,
					gridColumnEnd: `span ${columnBig}`,
					gridRowEnd: `span ${rowBig}`,
				});
			} else {
				setStyle(closed);
			}
		};

		handleLayout();
		window.addEventListener("resize", handleLayout, { passive: true });
		return () => {
			window.removeEventListener("resize", handleLayout);
		};
	}, [columnBig, isOpen, ref, rowBig]);
	return style;
};

export interface MasonryColumnProps {
	colSpan?: number | string;
	rowSpan?: number | string;
	isOpen?: boolean;
	onClick?(): void;
}

const MasonryColumn: FC<MasonryColumnProps> = ({
	children,
	onClick,
	rowSpan,
	colSpan,
	isOpen,
	...props
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const style = useMasonryColumn(ref, isOpen, {
		rowBig: `calc(${rowSpan} * 2)`,
		columnBig: `calc(${colSpan} * 2)`,
	});
	return (
		<StyledMasonryBox
			{...props}
			ref={ref}
			style={style}
			rowSpan={rowSpan}
			colSpan={colSpan}
			onClick={onClick}
		>
			{children}
		</StyledMasonryBox>
	);
};

export default MasonryColumn;
