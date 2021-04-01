import { shortId } from "@/ions/utils/id";
import { ContextMenuItem } from "@/molecules/context-menu/menu-item";
import { StyledContextMenu, StyledContextMenuDivider } from "@/molecules/context-menu/styled";
import { ContextMenuProps } from "@/types";
import React from "react";

const ContextMenu: React.FC<ContextMenuProps> = ({
	contextMenu: { isOpen, ref, x, y, close },
	onContextMenu,
	items = [],
}) => {
	const [selectedItem, setSelectedItem] = React.useState(-1);
	React.useEffect(() => {
		if (!isOpen) {
			setSelectedItem(-1);
		}
	}, [isOpen]);
	const allItems = React.useMemo(() => items.flatMap(item => item), [items]);
	const handleKeyDown = React.useCallback(
		({ key }) => {
			const { length } = allItems;
			if (key === "ArrowUp") {
				setSelectedItem(previousState => {
					let step = 1;
					while (
						allItems[(Math.max(0, previousState) + length - step) % length].disabled
					) {
						step += 1;
					}

					return (Math.max(0, previousState) + length - step) % length;
				});
			} else if (key === "ArrowDown") {
				setSelectedItem(previousState => {
					let step = 1;
					while (allItems[(previousState + step) % length].disabled) {
						step += 1;
					}

					return (previousState + step) % length;
				});
			}
		},
		[allItems]
	);
	return (
		isOpen && (
			<StyledContextMenu
				ref={ref}
				tabIndex={0}
				data-test-id="contextmenu"
				style={{
					transform: `translate3d(${x}px, ${y}px, 0)`,
				}}
				onContextMenu={onContextMenu}
				onKeyDown={handleKeyDown}
			>
				{items.flatMap((itemList, itemListIndex) => {
					return (
						<React.Fragment key={shortId.encode(itemListIndex)}>
							{itemList.map(item => {
								const { onClick, label, disabled } = item;
								const itemIndex = allItems.indexOf(item);
								return (
									<ContextMenuItem
										key={item.id}
										disabled={disabled}
										data-test-id="contextmenu:item"
										selected={selectedItem === itemIndex}
										onClick={() => {
											if (onClick) {
												onClick({ x, y });
											}

											close();
										}}
										onMouseOver={() => {
											if (!disabled) {
												setSelectedItem(itemIndex);
											}
										}}
										onMouseOut={() => {
											setSelectedItem(-1);
										}}
									>
										{label}
									</ContextMenuItem>
								);
							})}
							{itemListIndex < items.length - 1 && <StyledContextMenuDivider />}
						</React.Fragment>
					);
				})}
			</StyledContextMenu>
		)
	);
};

export default ContextMenu;
