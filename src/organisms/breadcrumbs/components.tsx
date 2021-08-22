import Icon from "@/atoms/icon";
import Typography from "@/atoms/typography";
import I18nLink from "@/molecules/i18n-link";
import React, { FC } from "react";
import {
	StyledBreadcrumbList,
	StyledBreadcrumbListItem,
	StyledBreadcrumbSeparator,
} from "./styled";
import { BreadcrumbItemProps } from "./types";

export const BreadcrumbSeparator = () => {
	return (
		<StyledBreadcrumbSeparator>
			<Icon icon="chevronRight" />
		</StyledBreadcrumbSeparator>
	);
};

export const BreadcrumbList: FC = ({ children }) => {
	return (
		<StyledBreadcrumbList
			itemScope
			itemType="http://schema.org/BreadcrumbList"
			aria-label="Breadcrumb"
		>
			{children}
		</StyledBreadcrumbList>
	);
};

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
	children,
	href,
	position,
	"aria-current": current,
}) => {
	return (
		<StyledBreadcrumbListItem
			itemScope
			itemProp="itemListElement"
			itemType="http://schema.org/ListItem"
		>
			<I18nLink
				href={href}
				itemProp="item"
				aria-current={current}
				tabIndex={current ? -1 : undefined}
			>
				<Typography raw light={Boolean(current)} component="span" itemProp="name">
					{children}
				</Typography>
				{!current && <BreadcrumbSeparator />}
			</I18nLink>
			{position && <meta itemProp="position" content={`${position}`} />}
		</StyledBreadcrumbListItem>
	);
};
