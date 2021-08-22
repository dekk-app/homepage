import { useContext, useMemo } from "react";
import { BreadcrumbsContext } from "./context";
import { Breadcrumb, RawBreadcrumb } from "./types";

export const useBreadcrumbs = (): Breadcrumb[] => {
	const breadcrumbs = useContext<RawBreadcrumb[]>(BreadcrumbsContext);

	return useMemo(
		() =>
			breadcrumbs.map((item, index) => {
				return {
					...item,
					id: `breadcrumb_${index}`,
					position: index + 1,
					current: index + 1 === breadcrumbs.length,
				};
			}),
		[breadcrumbs]
	);
};
