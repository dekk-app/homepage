export interface PagersElements {
	firstPage?: boolean;
	dotsBefore?: boolean;
	dotsAfter?: boolean;
	lastPage?: boolean;
	wrap?: number;
	first?: number;
}
export interface PagersOptions {
	first?: number;
	wrap?: number;
}

const config = {
	full: {
		firstPage: true,
		dotsBefore: true,
		dotsAfter: true,
		lastPage: true,
	},
	medium: {
		firstPage: false,
		dotsBefore: true,
		dotsAfter: true,
		lastPage: false,
	},
	small: {
		firstPage: false,
		dotsBefore: false,
		dotsAfter: false,
		lastPage: false,
	},
};

const hasDotsBefore = ({
	n,
	current,
	wrap,
	coreSize,
	lastPage,
	last,
}: {
	n: number;
	current: number;
	wrap: number;
	coreSize: number;
	lastPage: boolean;
	last: number;
}) =>
	(n >= current - (wrap + 1) && n < current) ||
	(current > last - wrap - (lastPage ? 1 : 0) && n > last - (coreSize + 1) - (lastPage ? 1 : 0));

const hasDotsAfter = ({
	n,
	current,
	wrap,
	coreSize,
	lastPage,
	first,
	firstPage,
}: {
	n: number;
	current: number;
	wrap: number;
	coreSize: number;
	lastPage: boolean;
	first: number;
	firstPage: boolean;
}) =>
	(n > current && n <= current + (wrap + 1)) ||
	(current < wrap + first + (lastPage ? 1 : 0) && n < coreSize + first + 1 + (firstPage ? 1 : 0));

export const getPagers = (
	pages: number,
	current: number,
	{ first = 1, wrap = 1 }: PagersOptions = {},
	{ dotsBefore, dotsAfter, firstPage, lastPage }: PagersElements = config.medium
) => {
	const coreSize = wrap * 2 + 1;

	return Array.from({ length: pages })
		.map((item, index) => {
			const n = index + first;
			const last = pages - 1 + first;

			// Show the current Page
			if (n === current) {
				return {
					current: true,
					page: n,
					id: "current",
				};
			}

			// Show the first Page
			if (n === first && firstPage) {
				return {
					pager: true,
					first: true,
					page: n,
					id: n,
				};
			}

			// Show the last page
			if (n === last && lastPage) {
				return {
					pager: true,
					last: true,
					page: n,
					id: n,
				};
			}

			// Show wrapping Elements
			if (
				(n < coreSize + first + (firstPage ? 1 : 0) && current <= wrap + first) ||
				(n > last - (coreSize + (lastPage ? 1 : 0)) && current >= last - wrap) ||
				(n >= current - wrap && n <= current + wrap)
			) {
				return {
					pager: true,
					page: n,
					id: n,
				};
			}

			if (
				(dotsBefore && hasDotsBefore({ n, current, wrap, coreSize, lastPage, last })) ||
				(dotsAfter &&
					hasDotsAfter({ n, current, wrap, coreSize, lastPage, first, firstPage }))
			) {
				return {
					dots: true,
					id: n,
				};
			}

			return null;
		})
		.filter(Boolean);
};
