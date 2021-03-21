import { Renderer, Template } from "@/ions/enums";
import { UseContextMenu } from "@/ions/hooks/context-menu";
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

export interface MenuItem {
	label: string;
	id: string;
	disabled?: boolean;
	onClick?(coords: { x: number; y: number }): void;
}

export interface ContextMenuProps {
	items: MenuItem[][];
	contextMenu: UseContextMenu;
	onContextMenu?: React.MouseEventHandler;
}

export interface ContextMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	selected?: boolean;
}

export interface Coordinates {
	x: number;
	y: number;
}

export interface Dimensions {
	height: number;
	width: number;
}

export interface View extends Coordinates, Dimensions {
	id: string;
}

export interface ArtboardType extends View {}

export interface ArtboardContextProps {
	artboards: ArtboardType[];
	selected: ArtboardType;
	add(coordinates: Coordinates): void;
	remove(): void;
	select(artboard: ArtboardType): void;
}

export type SidebarAnchor = "left" | "right";

export interface SidebarProps {
	anchor: SidebarAnchor;
}
