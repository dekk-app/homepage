import Icon from "@/atoms/icon";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { StyledSnackbar, StyledSnackbarButton, StyledSnackbarMessage } from "./styled";
import { SnackbarProps } from "./types";

const Snackbar: FC<SnackbarProps> = ({
	children,
	id,
	level = "default",
	autoClose = 6000,
	onClose,
	fixed,
	...props
}) => {
	const { t } = useTranslation(["common"]);
	useEffect(() => {
		if (onClose && autoClose > 0) {
			const timer = setTimeout(() => {
				onClose();
			}, autoClose);
			return () => {
				onClose();
				clearTimeout(timer);
			};
		}

		return () => {
			/**/
		};
	}, [onClose, autoClose]);
	return (
		<StyledSnackbar
			{...props}
			fixed={fixed}
			level={level}
			role="alertdialog"
			aria-describedby={id}
		>
			<StyledSnackbarMessage id={id}>{children}</StyledSnackbarMessage>
			{onClose && (
				<StyledSnackbarButton autoFocus aria-label={t("common:close")} onClick={onClose}>
					<Icon icon="close" />
				</StyledSnackbarButton>
			)}
		</StyledSnackbar>
	);
};

export default Snackbar;
