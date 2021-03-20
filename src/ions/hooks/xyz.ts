import { useDrag } from "@/ions/hooks/drag";
import { useWheel } from "@/ions/hooks/wheel";
import { clamp, inRange } from "@/ions/utils/number";
import React from "react";
import { useMouse } from "react-use";

export interface UseXYZProps<T> {
	factor?: number;
	min?: number;
	max?: number;
}

export const useXYZ = <T extends Element>(
	ref: React.MutableRefObject<T>,
	{ factor = 0.99, min = 0.1, max = 2 }: UseXYZProps<T>
) => {
	const { x, y, setX, setY } = useDrag<T>(ref, { x: 0, y: 0 });
	const { elX, elY } = useMouse(ref);
	const { dZ, dX, dY, timestamp } = useWheel();
	const [z, setZ] = React.useState(1);

	// Intended: missing dependencies elX, elY.
	// this memo is triggered by the timestamp.
	// elX, elY would constantly trigger this and therefore break the lifecycle
	// this memo be safely passed into the dependency array of side-effect that rely on timestamp
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const element = React.useMemo(() => ({ x: elX, y: elY, timestamp }), [timestamp]);

	React.useEffect(() => {
		const _f = dZ < 0 ? 1 / factor : factor;
		if (Math.abs(dZ) > 0) {
			setZ(previousState => {
				const nextState = clamp(previousState * _f, min, max);
				if (inRange(nextState, min, max)) {
					if (setX) {
						setX(
							previousState_ =>
								previousState_ - (element.x - previousState_) * (_f - 1)
						);
					}

					if (setY) {
						setY(
							previousState_ =>
								previousState_ - (element.y - previousState_) * (_f - 1)
						);
					}

					return previousState * _f;
				}

				return previousState;
			});
		} else {
			if (setX) {
				setX(previousState => previousState - dX / _f);
			}

			if (setY) {
				setY(previousState => previousState - dY / _f);
			}
		}
	}, [dX, dY, dZ, element, factor, min, max, setX, setY]);

	return {
		x,
		y,
		z,
		ref,
	};
};