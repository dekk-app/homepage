import { Renderer, Template } from "@/ions/enums";
import { LinkProps } from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";

export interface PageProps {
	locale: string;
	args: string[];
	template: Template;
}

export interface PageQuery extends ParsedUrlQuery {
	args: string[];
}

export type LocalizedValue<T = unknown> = Record<string, T>;

export type LocalizedString = LocalizedValue<string>;

export interface RouteConfig {
	dir: LocalizedString;
	breadcrumb: LocalizedString;
}

export interface RouteObject {
	template: string;
	config: RouteConfig;
}

export interface DataTestId {
	"data-test-id"?: string;
}

export type WithDataTestId<T = unknown> = DataTestId & T;

export interface StyledLinkProps {
	active?: boolean;
}

export interface ActiveLinkProps extends WithDataTestId<LinkProps> {}

export interface ErrorComponentProps {
	message: string;
}

export interface DataLogProps {
	data: unknown;
	logToConsole?: boolean;
}

export interface CanvasProps {
	renderer: Renderer;
}

export interface DropdownProps {
	button?: React.ForwardRefExoticComponent<any>;
}
