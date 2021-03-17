import { Template } from "@/ions/enums";
import { ParsedUrlQuery } from "querystring";

export interface PageProps {
	locale: string;
	args: string[];
	template: Template;
}

export interface PageQuery extends ParsedUrlQuery {
	args: string[];
}

export type LocalizedValue<T> = Record<string, T>;

export interface LocalizedString extends LocalizedValue<string> {}

export interface RouteConfig {
	dir: LocalizedString;
	breadcrumb: LocalizedString;
}

export interface RouteObject {
	template: string;
	config: RouteConfig;
}

export interface WithDataTestId {
	"data-test-id"?: string;
}
