import Icon from "@/atoms/icon";
import { ModalActionProps, ModalProps } from "@/molecules/modal/types";
import FocusTrap from "focus-trap-react";
import React, { FC } from "react";
import {
	StyledModal,
	StyledModalActions,
	StyledModalBackdrop,
	StyledModalContent,
	StyledModalHeader,
	StyledModalIconButton,
	StyledModalIconButtonWrapper,
} from "./styled";

const Modal: FC<ModalProps> = ({ children, onClose, dark }) => {
	return (
		<FocusTrap>
			<div>
				<StyledModalBackdrop onClick={onClose} />
				<StyledModal dark={dark}>
					{children}
					<StyledModalIconButtonWrapper>
						<StyledModalIconButton onClick={onClose}>
							<Icon icon="close" />
						</StyledModalIconButton>
					</StyledModalIconButtonWrapper>
				</StyledModal>
			</div>
		</FocusTrap>
	);
};

export const ModalHeader: FC = ({ children }) => <StyledModalHeader>{children}</StyledModalHeader>;
export const ModalContent: FC = ({ children }) => (
	<StyledModalContent>{children}</StyledModalContent>
);
export const ModalActions: FC<ModalActionProps> = ({ children, sticky }) => (
	<StyledModalActions sticky={sticky}>{children}</StyledModalActions>
);

export default Modal;
