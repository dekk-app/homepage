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
	outerRef: React.MutableRefObject<T>
): UseContextMenu => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = React.useState(false);
	const { elX, elY } = useMouse(outerRef);
	const [x, setX] = React.useState(0);
	const [y, setY] = React.useState(0);

	React.useEffect(() => {
		const handleContextMenu = (event: MouseEvent) => {
			// Prevent native contextmenu from opening
			event.preventDefault();
			setIsOpen(true);
			setX(elX);
			setY(elY);
			if (ref.current) {
				// Focus the contextmenu
				ref.current.focus();
			}
		};

		if (outerRef.current) {
			outerRef.current.addEventListener("contextmenu", handleContextMenu);
			const unsubscribe = () => {
				outerRef.current.removeEventListener("contextmenu", handleContextMenu);
			};

			return () => {
				unsubscribe();
			};
		}
	}, [elX, elY, ref, outerRef]);

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
