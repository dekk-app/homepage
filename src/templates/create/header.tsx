import IconButton from "@/atoms/icon-button";
import { IconSize } from "@/ions/enums";
import { usePositionContext } from "@/ions/hooks/position";
import Dropdown from "@/molecules/dropdown";
import {
	StyledFlex,
	StyledHeader,
	StyledIconGrid,
	StyledSeparator,
	StyledSpace,
	StyledTitle,
} from "@/templates/create/styled";
import React from "react";

export const MenuLink = React.forwardRef<HTMLButtonElement, { active?: boolean }>(
	({ active, children, ...props }, ref) => (
		<IconButton
			{...props}
			ref={ref}
			aria-label="Menu"
			data-test-id="header:menu-button"
			size={IconSize.m}
			icon="menu"
			type="button"
			active={active}
		/>
	)
);

export const TextLink = React.forwardRef<HTMLButtonElement, { active?: boolean }>(
	({ active, children, ...props }, ref) => (
		<IconButton
			{...props}
			ref={ref}
			aria-label="Text"
			data-test-id="header:text-dropdown-button"
			size={IconSize.m}
			icon="editorText"
			type="button"
			active={active}
		/>
	)
);

export const ImageLink = React.forwardRef<HTMLButtonElement, { active?: boolean }>(
	({ active, children, ...props }, ref) => (
		<IconButton
			{...props}
			ref={ref}
			aria-label="Image"
			data-test-id="header:media-dropdown-button"
			size={IconSize.m}
			icon="editorImage"
			type="button"
			active={active}
		/>
	)
);

export const PlayLink = React.forwardRef<HTMLButtonElement, { active?: boolean }>(
	({ active, children, ...props }, ref) => (
		<IconButton
			{...props}
			ref={ref}
			primary
			aria-label="play"
			data-test-id="header:play-button"
			size={IconSize.m}
			icon="play"
			type="button"
			active={active}
		/>
	)
);

const Header: React.FC = () => {
	const { zoom, setZ } = usePositionContext();
	React.useEffect(() => {
		const handleKeydown = event_ => {
			if (event_.metaKey) {
				if (event_.key === "+") {
					event_.preventDefault();
					zoom(-1, 0.8);
				} else if (event_.key === "-") {
					event_.preventDefault();
					zoom(1, 0.8);
				} else if (event_.key === "0") {
					event_.preventDefault();
					setZ(1);
				}
			}
		};

		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [zoom, setZ]);
	return (
		<StyledHeader>
			<MenuLink />
			<StyledSpace>
				<StyledTitle>Reinventing Presentations</StyledTitle>
			</StyledSpace>
			<StyledFlex>
				<StyledIconGrid>
					<Dropdown button={TextLink} data-test-id="dropdown" />
					<Dropdown button={ImageLink} data-test-id="dropdown" />
				</StyledIconGrid>
			</StyledFlex>
			<StyledSpace>
				<StyledSeparator />
			</StyledSpace>
			<PlayLink />
		</StyledHeader>
	);
};

const areEqual = () => {
	return true;
};

export default React.memo(Header, areEqual);
