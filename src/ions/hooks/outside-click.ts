import React from "react";

export const useOutsideClick = <T extends Element[]>(
	onClick: (event_: MouseEvent) => void,
	elements: T
) => {
	React.useEffect(() => {
		const handleClick = event_ => {
			const isOutside = elements.reduce(
				(previousValue, currentValue) =>
					previousValue &&
					currentValue &&
					!currentValue.contains(event_.target) &&
					currentValue !== event_.target,
				true
			);
			if (isOutside) {
				onClick(event_);
			}
		};

		window.addEventListener("click", handleClick);
		return () => {
			window.removeEventListener("click", handleClick);
		};
	}, [elements, onClick]);
};
