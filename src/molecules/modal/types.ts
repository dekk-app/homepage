export type ModalAnchor = "center" | "bottom" | "bottomRight";

export interface StyledModalProps {
	dark?: boolean;
	anchor?: ModalAnchor;
}

export interface ModalProps extends StyledModalProps {
	backdrop?: boolean;
	onClose?(): void;
}

export interface ModalActionProps {
	sticky?: boolean;
	secondary?: boolean;
}

export interface ModalHeaderProps {
	raw?: boolean;
}

export interface ModalContentProps {
	raw?: boolean;
}
