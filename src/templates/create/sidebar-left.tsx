import { IconButton } from "@/atoms/icon-button";
import { IconSize } from "@/ions/enums";
import { useArtboardContext } from "@/ions/hooks/context";
import { truncateByWidth } from "@/ions/utils/string";
import { ArtboardPreview } from "@/molecules/artboard/preview";
import { ArtboardType } from "@/types";
import { useTranslation } from "next-i18next";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
	StyledChild,
	StyledChildrenWrapper,
	StyledGreyIcon,
	StyledItem,
	StyledItemButton,
	StyledItemTitle,
	StyledItemWrapper,
	StyledList,
	StyledPreview,
	StyledSidebarHeader,
	StyledSidebarInner,
} from "./styled";

export const ItemTitle: React.FC<{ title: string }> = ({ title }) => {
	const truncated = React.useMemo(
		() =>
			truncateByWidth(title, 136, 20, {
				fontSize: "12px",
				fontFamily: "Poppins",
				fontWeight: "600",
			}),
		[title]
	);
	return <StyledItemTitle>{truncated}</StyledItemTitle>;
};

export const Item: React.FC<{ artboard: ArtboardType }> = ({ artboard, children, ...props }) => {
	const { t } = useTranslation("aria");
	const context = useArtboardContext();
	const [expanded, setExpanded] = React.useState(false);
	const [focused, setFocused] = React.useState(false);
	const active = context.focused === artboard.id;
	return (
		<>
			<StyledItem {...props}>
				<StyledItemWrapper focused={focused} active={active}>
					<IconButton
						size={IconSize.s}
						icon={expanded ? "chevronDown" : "chevronRight"}
						aria-label={expanded ? t("aria:collapse") : t("aria:expand")}
						type="button"
						onClick={() => {
							setExpanded(previousState => !previousState);
						}}
					/>
					<StyledItemButton
						type="button"
						onDoubleClick={() => {
							context.focus(artboard.id);
						}}
						onClick={({ detail }) => {
							if (detail === 0) {
								context.focus(artboard.id);
							}
						}}
						onFocus={() => {
							setFocused(true);
						}}
						onBlur={() => {
							setFocused(false);
						}}
					>
						{children}
					</StyledItemButton>
				</StyledItemWrapper>
			</StyledItem>
			<StyledChildrenWrapper
				aria-expanded={expanded ? "true" : "false"}
				initial={{ height: expanded ? "auto" : 0 }}
				animate={{ height: expanded ? "auto" : 0 }}
			>
				<StyledChild>
					<StyledGreyIcon size={IconSize.s} icon="editorImage" />
					Image.jpg
				</StyledChild>
				<StyledChild>
					<StyledGreyIcon size={IconSize.s} icon="editorText" />
					Headline
				</StyledChild>
			</StyledChildrenWrapper>
		</>
	);
};

const SidebarLeft: React.FC = () => {
	const { artboards, inject } = useArtboardContext();
	const { t } = useTranslation("aria");
	return (
		<StyledSidebarInner data-test-id="sidebar:left">
			<StyledSidebarHeader>
				Slides
				<IconButton
					primary
					size={24}
					icon="plus"
					aria-label={t("aria:add-artboard")}
					data-test-id="sidebar:add-artboard"
					type="button"
					onClick={() => {
						inject();
					}}
				/>
			</StyledSidebarHeader>
			<DndProvider backend={HTML5Backend}>
				<StyledList>
					{artboards.map(artboard => {
						return (
							<Item key={artboard.id} artboard={artboard}>
								<StyledPreview>
									<ArtboardPreview artboard={artboard} scale={50 / 1600} />
								</StyledPreview>
								<ItemTitle title={artboard.title} />
							</Item>
						);
					})}
				</StyledList>
			</DndProvider>
		</StyledSidebarInner>
	);
};

export default SidebarLeft;
