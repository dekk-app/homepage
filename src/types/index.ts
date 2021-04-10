import { IconSize, Route } from "@/ions/enums";
import { AppProvider, AppProviders } from "next-auth/providers";
import { LinkProps } from "next/link";
import React from "react";
import { RegisterOptions } from "react-hook-form";
import { Except } from "type-fest";

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

export interface ErrorComponentProps {
	message: string;
}

export interface DataLogProps {
	data: unknown;
	logToConsole?: boolean;
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

export type NextAuthProvider = Record<keyof AppProviders | string, AppProvider> | null;

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

/* eslint-enable no-unused-vars */
export interface GetI18nRouteOptions {
	locale: string;
	defaultLocale: string;
}

export interface I18nLinkProps extends Except<LinkProps, "href"> {
	route: Route;
	subPath?: string;
}
