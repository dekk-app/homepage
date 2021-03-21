import { StyledContextMenuItem } from "@/molecules/context-menu/styled";
import { ContextMenuItemProps } from "@/types";
import React from "react";

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
	children,
	selected,
	...props
}) => {
	const ref = React.useRef<HTMLButtonElement>();
	React.useEffect(() => {
		if (selected && ref.current) {
			ref.current.focus();
		}
	}, [selected, ref]);
	return (
		<StyledContextMenuItem {...props} ref={ref} type="button" selected={selected}>
			{children}
		</StyledContextMenuItem>
	);
};
