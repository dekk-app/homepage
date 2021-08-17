import Icon from "@/atoms/icon";
import FocusTrap, { Props as FocusTrapProps } from "focus-trap-react";
import { useTranslation } from "next-i18next";
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
import { ModalActionProps, ModalProps } from "./types";

const focusTrapOptions: FocusTrapProps["focusTrapOptions"] = {
	initialFocus: false,
};

const Modal: FC<ModalProps> = ({ children, onClose, dark }) => {
	const { t } = useTranslation(["common"]);
	return (
		<FocusTrap focusTrapOptions={focusTrapOptions}>
			<div>
				<StyledModalBackdrop onClick={onClose} />
				<StyledModal dark={dark}>
					{children}
					<StyledModalIconButtonWrapper>
						<StyledModalIconButton aria-label={t("common:close")} onClick={onClose}>
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
export const ModalActions: FC<ModalActionProps> = ({ children, sticky, secondary }) => (
	<StyledModalActions sticky={sticky} secondary={secondary}>
		{children}
	</StyledModalActions>
);

export default Modal;
