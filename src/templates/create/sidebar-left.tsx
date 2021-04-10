import IconButton from "@/atoms/icon-button";
import { IconSize } from "@/ions/enums";
import { useArtboardContext } from "@/ions/hooks/context";
import { ArtboardType } from "@/types";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

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

const ArtboardPreview = dynamic(async () => import("@/molecules/artboard/preview"));

export const ItemTitle: React.FC<{ title: string }> = ({ title }) => {
	return <StyledItemTitle>{title}</StyledItemTitle>;
};

const Item: React.FC<{ artboard: ArtboardType }> = ({ artboard, children, ...props }) => {
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
					onClick={inject}
				/>
			</StyledSidebarHeader>
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
		</StyledSidebarInner>
	);
};

const areEqual = () => {
	return true;
};

export default React.memo(SidebarLeft, areEqual);
