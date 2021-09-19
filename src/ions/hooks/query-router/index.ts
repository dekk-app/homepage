import { useRouter } from "next/router";
import { useCallback } from "react";

export const cleanQuery = <T>(query: Record<string, T>) => {
	const NextQuery = {};
	for (const key in query) {
		if (query[key] !== null && query[key] !== undefined) {
			NextQuery[key] = query[key];
		}
	}

	return NextQuery;
};

export const useQueryRouter = () => {
	const { query, push: routerPush, pathname } = useRouter();
	const push = useCallback(
		async (nextQuery: Record<string, string>) => {
			return routerPush(
				{
					pathname,
					query: cleanQuery({
						...query,
						...nextQuery,
					}),
				},
				undefined,
				{ shallow: true }
			);
		},
		[pathname, routerPush, query]
	);
	return { push, query, pathname };
};
