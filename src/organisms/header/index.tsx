import Icon from "@/atoms/icon";
import IconButton from "@/atoms/icon-button";
import Logo from "@/atoms/logo";
import Typography from "@/atoms/typography";
import { useScrollY } from "@/ions/hooks/scroll-y";
import Drawer from "@/molecules/drawer";
import {
	StyledDrawerContent,
	StyledDrawerHeader,
	StyledDrawerLink,
} from "@/molecules/drawer/styled";
import { Grid } from "@/molecules/grid";
import Hidden from "@/molecules/hidden";
import I18nLink from "@/molecules/i18n-link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { FC, memo, useState } from "react";
import { StyledHeader, StyledHeaderColumn, StyledHeaderItemsColumn } from "./styled";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ children, className, dark, innerRef, testId }) => {
	const { t } = useTranslation(["navigation"]);
	const { route } = useRouter();
	const isOnWishlist = route === "/wishlist";
	const scrollY = useScrollY(isOnWishlist);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isIndented = scrollY > 150;

	return (
		<>
			<StyledHeader
				ref={innerRef}
				dark={dark}
				elevated={scrollY > 0}
				className={className}
				data-test-id={testId}
			>
				{children}
				<Grid stretch>
					<StyledHeaderColumn colSpanS={1} colSpanM={2}>
						<I18nLink href="/" data-test-id="link-to-home">
							<Logo aria-label={t("navigation:home")} />
						</I18nLink>
					</StyledHeaderColumn>
					<StyledHeaderItemsColumn
						indented={isIndented}
						colSpanS={3}
						colSpanM={6}
						colSpanL={10}
						as="nav"
					>
						<Hidden hideXS hideS>
							<I18nLink href="/about-us" data-test-id="link-to-about-us">
								{t("navigation:about-us")}
							</I18nLink>
						</Hidden>
						<Hidden hideM hideL>
							<IconButton
								aria-label={t("common:open-menu")}
								onClick={() => {
									setIsDrawerOpen(true);
								}}
							>
								<Icon icon="menu" />
							</IconButton>
						</Hidden>
					</StyledHeaderItemsColumn>
				</Grid>
			</StyledHeader>
			{isDrawerOpen && (
				<Hidden hideM hideL>
					<Drawer
						dark={!dark}
						open={isDrawerOpen}
						onClose={() => {
							setIsDrawerOpen(false);
						}}
					>
						<StyledDrawerHeader>
							<I18nLink href="/" data-test-id="link-to-home">
								<Logo aria-label={t("navigation:home")} />
							</I18nLink>
							<div>
								<IconButton
									aria-label={t("common:close-menu")}
									onClick={() => {
										setIsDrawerOpen(false);
									}}
								>
									<Icon icon="close" />
								</IconButton>
							</div>
						</StyledDrawerHeader>
						<StyledDrawerContent as="nav">
							<Typography variant="subtitle" component="div">
								{t("navigation:business")}
							</Typography>
							<StyledDrawerLink
								a11y
								href="/about-us"
								data-test-id="link-to-about-us"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:about-us")}
							</StyledDrawerLink>
							<StyledDrawerLink
								a11y
								href="/wishlist"
								data-test-id="link-to-wishlist"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:wishlist")}
							</StyledDrawerLink>
							<Typography variant="subtitle" component="div">
								{t("navigation:legal")}
							</Typography>
							<StyledDrawerLink
								a11y
								href="/legal"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:imprint")}
							</StyledDrawerLink>
							<StyledDrawerLink
								a11y
								href="/legal/privacy-policy"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:policy")}
							</StyledDrawerLink>
							<StyledDrawerLink
								a11y
								href="/legal/cookie-policy"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:cookies")}
							</StyledDrawerLink>
							<StyledDrawerLink
								a11y
								href="/legal/terms-of-service"
								onClick={() => {
									setIsDrawerOpen(false);
								}}
							>
								{t("navigation:terms")}
							</StyledDrawerLink>
						</StyledDrawerContent>
					</Drawer>
				</Hidden>
			)}
		</>
	);
};

export default memo(Header);
