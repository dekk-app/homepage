import Icon from "@/atoms/icon";
import IconButton from "@/atoms/icon-button";
import { usePaging } from "@/ions/hooks/paging";
import { getPagers } from "@/ions/utils/pagers";
import {
	StyledCurrentPage,
	StyledPager,
	StyledPagers,
	StyledPagersWrapper,
	StyledSelect,
	StyledSelectIconWrapper,
	StyledSelectWrapper,
} from "@/organisms/pager/styled";
import { ElementsConfig, PagerProps } from "@/organisms/pager/types";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";

export type Variation = "minimal" | "medium" | "full";

export const config: Record<Variation, ElementsConfig> = {
	minimal: {
		toFirst: false,
		toPrevious: true,
		firstPage: false,
		dotsBefore: false,
		pager: false,
		currentPage: true,
		of: true,
		dotsAfter: false,
		lastPage: false,
		toNext: true,
		toLast: false,
		pageSize: false,
	},
	medium: {
		toFirst: true,
		toPrevious: true,
		firstPage: false,
		dotsBefore: false,
		pager: true,
		currentPage: true,
		of: false,
		dotsAfter: false,
		lastPage: false,
		toNext: true,
		toLast: true,
		pageSize: false,
	},
	full: {
		toFirst: true,
		toPrevious: true,
		firstPage: true,
		dotsBefore: true,
		pager: true,
		currentPage: true,
		of: false,
		dotsAfter: true,
		lastPage: true,
		toNext: true,
		toLast: true,
		pageSize: true,
	},
};

const Pager = ({
	fullWidth,
	items,
	first = 1,
	wrap = 1,
	property = "page",
	pageSize: {
		property: pageSizeProperty = "pageSize",
		step: pageSizeStep = 24,
		steps: pageSizeSteps = 4,
	} = {},
	elements: {
		toFirst: toFirstElement,
		toPrevious: toPreviousElement,
		firstPage: firstPageElement,
		dotsBefore: dotsBeforeElement,
		dotsAfter: dotsAfterElement,
		pager: pagerElement,
		currentPage: currentPageElement,
		of: ofElement,
		lastPage: lastPageElement,
		toNext: toNextElement,
		toLast: toLastElement,
		pageSize: pageSizeElement,
	} = config.minimal,
}: PagerProps) => {
	const { t } = useTranslation(["common"]);

	const { goTo: updatePageSize, current: currentPageSize } = usePaging(
		pageSizeStep * pageSizeSteps,
		{
			first: pageSizeStep,
			property: pageSizeProperty,
		}
	);

	const pages = Math.ceil(items / currentPageSize);
	const last = pages - 1 + first;

	const { toNext, toPrevious, toFirst, toLast, goTo, current } = usePaging(pages, {
		first,
		property,
	});

	const pagers = getPagers(
		pages,
		current,
		{ first, wrap },
		{
			firstPage: firstPageElement,
			lastPage: lastPageElement,
			dotsAfter: dotsAfterElement,
			dotsBefore: dotsBeforeElement,
		}
	);

	return (
		<StyledPagersWrapper>
			<StyledPagers fullWidth={fullWidth}>
				{toFirstElement && (
					<IconButton
						disabled={current <= first}
						aria-label={t("common:first-page")}
						onClick={toFirst}
					>
						<Icon icon="chevronDoubleLeft" />
					</IconButton>
				)}
				{toPreviousElement && (
					<IconButton
						disabled={current <= first}
						aria-label={t("common:previous-page")}
						onClick={toPrevious}
					>
						<Icon icon="chevronLeft" />
					</IconButton>
				)}
				<StyledPagersWrapper>
					{pagers.map(pager => {
						if (pager.current) {
							return (
								currentPageElement && (
									<StyledCurrentPage key={pager.id}>
										{pager.page}
										{ofElement && ` / ${last}`}
									</StyledCurrentPage>
								)
							);
						}

						if (pager.dots) {
							return (
								<StyledPager key={pager.id} data-test-id={pager.id}>
									…
								</StyledPager>
							);
						}

						return (
							pagerElement && (
								<IconButton
									key={pager.id}
									onClick={() => {
										goTo(pager.page);
									}}
								>
									{pager.page}
								</IconButton>
							)
						);
					})}
				</StyledPagersWrapper>
				{toNextElement && (
					<IconButton
						disabled={current >= last}
						aria-label={t("common:next-page")}
						onClick={toNext}
					>
						<Icon icon="chevronRight" />
					</IconButton>
				)}
				{toLastElement && (
					<IconButton
						disabled={current >= last}
						aria-label={t("common:last-page")}
						onClick={toLast}
					>
						<Icon icon="chevronDoubleRight" />
					</IconButton>
				)}
				{pageSizeElement && pageSizeSteps > 1 && (
					<StyledSelectWrapper>
						<StyledSelect
							value={currentPageSize}
							onChange={event_ => {
								const nextSize = Number.parseInt(event_.target.value, 10);
								updatePageSize(nextSize);
							}}
						>
							{Array.from({ length: pageSizeSteps }).map((_, i) => {
								const key = pageSizeStep * (i + 1);
								return <option key={key}>{key}</option>;
							})}
						</StyledSelect>
						<StyledSelectIconWrapper>
							<Icon icon="chevronDown" />
						</StyledSelectIconWrapper>
					</StyledSelectWrapper>
				)}
			</StyledPagers>
		</StyledPagersWrapper>
	);
};

export default memo(Pager);
