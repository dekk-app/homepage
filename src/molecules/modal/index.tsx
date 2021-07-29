import { useModal } from "@/ions/contexts/modal";
import React, { FC } from "react";
import {
	StyledModal,
	StyledModalActions,
	StyledModalBackdrop,
	StyledModalContent,
	StyledModalHeader,
} from "./styled";

const Modal: FC = ({ children }) => {
	const { close } = useModal();

	return (
		<>
			<StyledModalBackdrop onClick={close} />
			<StyledModal>{children}</StyledModal>
		</>
	);
};

export const ModalHeader: FC = ({ children }) => <StyledModalHeader>{children}</StyledModalHeader>;
export const ModalContent: FC = ({ children }) => (
	<StyledModalContent>{children}</StyledModalContent>
);
export const ModalActions: FC = ({ children }) => (
	<StyledModalActions>{children}</StyledModalActions>
);

export default Modal;
