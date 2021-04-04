import { useArtboardContext } from "@/ions/hooks/context";
import { usePositionContext } from "@/ions/hooks/position";
import { inRange } from "@/ions/utils/number";
import { ArtboardType } from "@/types";
import React from "react";

export const useSiblingSnap = (artboard: ArtboardType, dragging) => {
	const { artboards } = useArtboardContext();
	const { z } = usePositionContext();
	const threshold = 10 / z;
	const { x, y } = React.useMemo(
		() =>
			dragging
				? artboards
						.filter(({ id }) => id !== artboard.id)
						.map(({ x, y, height, width }) => {
							const snap = { x: null, y: null };
							if (inRange(artboard.x, x + width - threshold, x + width + threshold)) {
								snap.x = x + width;
							} else if (
								inRange(artboard.x + artboard.width, x - threshold, x + threshold)
							) {
								snap.x = x - width;
							} else if (inRange(artboard.x, x - threshold, x + threshold)) {
								snap.x = x;
							} else {
								snap.x = null;
							}

							if (
								inRange(artboard.y, y + height - threshold, y + height + threshold)
							) {
								snap.y = y + height;
							} else if (
								inRange(artboard.y + artboard.height, y - threshold, y + threshold)
							) {
								snap.y = y - height;
							} else if (inRange(artboard.y, y - threshold, y + threshold)) {
								snap.y = y;
							} else {
								snap.y = null;
							}

							return snap;
						})
						.reduce(
							(previousValue, { x, y }) => {
								const r = {
									...previousValue,
								};
								if (
									previousValue.x &&
									artboard.x - previousValue.x < artboard.x - x
								) {
									r.x = previousValue.x;
								} else {
									r.x = x;
								}

								if (
									previousValue.y &&
									artboard.y - previousValue.y < artboard.y - y
								) {
									r.y = previousValue.y;
								} else {
									r.y = y;
								}

								return r;
							},
							{ x: null, y: null }
						)
				: { x: null, y: null },
		[artboards, artboard, dragging, threshold]
	);
	return React.useMemo(() => ({ x, y }), [x, y]);
};
