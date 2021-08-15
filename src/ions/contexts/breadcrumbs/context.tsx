import React, { createContext, FC } from "react";
import { RawBreadcrumb } from "./types";

export const BreadcrumbsContext = createContext<RawBreadcrumb[]>([]);
export const BreadcrumbsProvider: FC<{ breadcrumbs: RawBreadcrumb[] }> = ({
	children,
	breadcrumbs,
}) => {
	return (
		<BreadcrumbsContext.Provider value={breadcrumbs}>{children}</BreadcrumbsContext.Provider>
	);
};
