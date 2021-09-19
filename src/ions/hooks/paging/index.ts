import { useObjectSnakeToCamel } from "@/ions/hooks/case";
import { useQueryRouter } from "@/ions/hooks/query-router";
import { objectCamelToSnake } from "@/ions/utils/object";
import { decreaseStringNumber, increaseStringNumber, toString } from "@/ions/utils/string";
import { useCallback, useEffect } from "react";

export const usePaging = (length: number, { first = 0, property = "page" }) => {
	const { push, query } = useQueryRouter();
	const camelObject = useObjectSnakeToCamel<string | string[]>({
		[property]: toString(first),
		...query,
	});

	const last = length - 1 + first;
	const current = camelObject[property]
		? Number.parseInt(camelObject[property] as string, 10)
		: first;
	// Clamp to max
	const clamped = Math.max(Math.min(current, last), first);

	useEffect(() => {
		if (clamped < current) {
			void push(
				objectCamelToSnake({
					[property]: toString(last),
				})
			);
		}
	}, [push, property, current, clamped, last]);

	const goTo = useCallback(
		(nextState: number) => {
			void push(
				objectCamelToSnake({
					[property]: toString(nextState),
				})
			);
		},
		[property, push]
	);

	const toNext = useCallback(() => {
		void push(
			objectCamelToSnake({
				[property]: increaseStringNumber(camelObject[property] as string),
			})
		);
	}, [property, push, camelObject]);

	const toPrevious = useCallback(() => {
		void push(
			objectCamelToSnake({
				[property]: decreaseStringNumber(camelObject[property] as string),
			})
		);
	}, [property, push, camelObject]);

	const toFirst = useCallback(() => {
		void push(
			objectCamelToSnake({
				[property]: toString(first),
			})
		);
	}, [property, push, first]);

	const toLast = useCallback(() => {
		void push(
			objectCamelToSnake({
				[property]: toString(last),
			})
		);
	}, [property, push, last]);
	return {
		goTo,
		toNext,
		toPrevious,
		toFirst,
		toLast,
		current,
	};
};
