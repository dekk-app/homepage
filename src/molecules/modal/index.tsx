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
import { ModalActionProps, ModalContentProps, ModalHeaderProps, ModalProps } from "./types";

const focusTrapOptions: FocusTrapProps["focusTrapOptions"] = {
	initialFocus: false,
};

const Modal: FC<ModalProps> = ({ children, onClose, dark, backdrop, anchor = "center" }) => {
	const { t } = useTranslation(["common"]);
	return backdrop ? (
		<FocusTrap focusTrapOptions={focusTrapOptions}>
			<div>
				{backdrop && <StyledModalBackdrop onClick={onClose} />}
				<StyledModal dark={dark} anchor={anchor}>
					{children}
					<StyledModalIconButtonWrapper>
						<StyledModalIconButton aria-label={t("common:close")} onClick={onClose}>
							<Icon icon="close" />
						</StyledModalIconButton>
					</StyledModalIconButtonWrapper>
				</StyledModal>
			</div>
		</FocusTrap>
	) : (
		<StyledModal dark={dark} anchor={anchor}>
			{children}
			<StyledModalIconButtonWrapper>
				<StyledModalIconButton aria-label={t("common:close")} onClick={onClose}>
					<Icon icon="close" />
				</StyledModalIconButton>
			</StyledModalIconButtonWrapper>
		</StyledModal>
	);
};

export const ModalHeader: FC<ModalHeaderProps> = ({ children, ...props }) => (
	<StyledModalHeader {...props}>{children}</StyledModalHeader>
);
export const ModalContent: FC<ModalContentProps> = ({ children, ...props }) => (
	<StyledModalContent {...props}>{children}</StyledModalContent>
);
export const ModalActions: FC<ModalActionProps> = ({ children, ...props }) => (
	<StyledModalActions {...props}>{children}</StyledModalActions>
);

export default Modal;
