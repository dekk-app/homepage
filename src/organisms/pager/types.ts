export interface ElementsConfig {
	firstPage?: boolean;
	lastPage?: boolean;
	currentPage?: boolean;
	toFirst?: boolean;
	toLast?: boolean;
	toNext?: boolean;
	toPrevious?: boolean;
	pageSize?: boolean;
	pager?: boolean;
	of?: boolean;
	dotsBefore?: boolean;
	dotsAfter?: boolean;
}
export interface PagerProps {
	fullWidth?: boolean;
	items: number;
	first?: number;
	wrap?: number;
	property: string;
	pageSize?: {
		property?: string;
		step?: number;
		steps?: number;
	};
	elements?: ElementsConfig;
}
