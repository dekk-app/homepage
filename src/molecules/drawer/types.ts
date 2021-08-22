export interface StyledDrawerProps {
	dark?: boolean;
}

export interface DrawerProps extends StyledDrawerProps {
	open?: boolean;
	onClose?(): void;
}

export interface StyledDrawerLinkProps {
	a11y?: boolean;
}
