import { useOutsideClick } from "@/ions/hooks/outside-click";
import React from "react";
import { useMouse } from "react-use";

export interface UseContextMenu {
	ref: React.MutableRefObject<HTMLDivElement>;
	isOpen: boolean;
	x: number;
	y: number;
	open(): void;
	close(): void;
}

export const useContextMenu = <T extends Element = HTMLDivElement>(
	targetRef: React.MutableRefObject<T>
): UseContextMenu => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = React.useState(false);
	const { elX, elY } = useMouse(targetRef);
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);
	const { current } = ref;
	const { current: targetRefCurrent } = targetRef;

	React.useEffect(() => {
		const handleContextMenu = (event_: MouseEvent) => {
			// Prevent native contextmenu from opening
			event_.preventDefault();
			setIsOpen(true);
			setX(elX);
			setY(elY);
			if (current) {
				// Focus the contextmenu
				current.focus();
			}
		};

		if (targetRefCurrent) {
			targetRefCurrent.addEventListener("contextmenu", handleContextMenu);
		}

		const unsubscribe = () => {
			if (targetRefCurrent) {
				targetRefCurrent.removeEventListener("contextmenu", handleContextMenu);
			}
		};

		return () => {
			unsubscribe();
		};
	}, [elX, elY, current, targetRefCurrent]);

	useOutsideClick(() => {
		setIsOpen(false);
	}, [ref.current]);

	const close = React.useCallback(() => {
		setIsOpen(false);
	}, []);

	const open = React.useCallback(() => {
		setIsOpen(true);
	}, []);

	return { isOpen, close, open, x, y, ref };
};
