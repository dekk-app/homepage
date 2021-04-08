import { IconSize, Renderer, Route, Template } from "@/ions/enums";
import { UseContextMenu } from "@/ions/hooks/context-menu";
import { Session } from "next-auth";
import { AppProvider, DefaultProviders } from "next-auth/providers";
import { LinkProps } from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { RegisterOptions } from "react-hook-form";
import { Except } from "type-fest";

/* eslint-disable no-unused-vars */
export interface PageProps {
	locale: string;
	args: string[];
	template: Template;
	session: Session;
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
	title: string;
}

export interface ViewWithChildren<C extends View = View> extends View {
	children?: C[];
}

export interface Element extends View {
	__typename: "Element";
}

export interface Group extends ViewWithChildren<Element | Group> {
	__typename: "Group";
}

export interface Layer extends ViewWithChildren<Element | Group | Layer> {
	__typename: "Layer";
}

export interface ArtboardType extends ViewWithChildren<Layer | Group> {
	__typename: "Artboard";
}

export interface ArtboardContextProps {
	artboards: ArtboardType[];
	selected: ArtboardType;
	focused: string;
	inject(): void;
	add(coordinates: Coordinates): void;
	remove(): void;
	update(id: string, artboard: Partial<ArtboardType>): void;
	select(artboard: ArtboardType): void;
	focus(id: string): void;
}

export type SidebarAnchor = "left" | "right";

export interface SidebarProps {
	anchor: SidebarAnchor;
}

export interface ArtboardProps {
	artboard: ArtboardType;
	onMouseDown?(): void;
	onClick?(): void;
	onContextMenu?(): void;
}

export type IconName =
	| "chevronDown"
	| "chevronRight"
	| "chevronLeft"
	| "chevronUp"
	| "editorImage"
	| "editorText"
	| "menu"
	| "play"
	| "plus";

export type IconCollection = {
	[key in IconName]: string;
};

export type Icons = {
	[key in IconSize]: IconCollection;
};

export declare const icons: Icons;

export default icons;

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
	icon: IconName;
	size: IconSize;
}

export interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	icon: IconName;
	size: IconSize;
	primary?: boolean;
	active?: boolean;
	type: "button";
}

export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
	fullWidth?: boolean;
	validation: RegisterOptions;
	args?: Record<string, string | number>;
	testId?: string;
	defaultValue?: string;
}

export interface LoginFormProps {
	email: string;
}

export type NextAuthProvider = Record<keyof DefaultProviders | string, AppProvider> | null;

export interface LoginProps {
	providers: NextAuthProvider;
}

export interface PositionContextProps {
	x: number;
	y: number;
	z: number;
	height: number;
	width: number;
	zoom(dir: number, m: number): void;
	setX(n: number): void;
	setY(n: number): void;
	setZ(n: number): void;
}

export interface UseDragProps {
	x?: number;
	y?: number;
	onDragStart?(): void;
	onDrag?(c: { dX: number; dY: number }): void;
	onDragEnd?(c: { dX: number; dY: number }): void;
}

export interface UseXYZProps<T> {
	factor?: number;
	initialZoom?: number;
	initialPosition?: { x: number; y: number };
	min?: number;
	max?: number;
}
/* eslint-enable no-unused-vars */
export interface GetI18nRouteOptions {
	locale: string;
	defaultLocale: string;
}

export interface I18nLinkProps extends Except<LinkProps, "href"> {
	route: Route;
	subPath?: string;
}
