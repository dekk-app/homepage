import { useLockBodyScroll } from "@/ions/hooks/body-scroll-lock";
import FocusTrap, { Props as FocusTrapProps } from "focus-trap-react";
import React, { FC } from "react";
import { StyledDrawer, StyledDrawerBackdrop } from "./styled";
import { DrawerProps } from "./types";

const focusTrapOptions: FocusTrapProps["focusTrapOptions"] = {
	initialFocus: false,
};

const Drawer: FC<DrawerProps> = ({ children, open, onClose, ...props }) => {
	useLockBodyScroll();
	return (
		<FocusTrap focusTrapOptions={focusTrapOptions}>
			<div>
				<StyledDrawerBackdrop onClick={onClose} />
				<StyledDrawer {...props}>{children}</StyledDrawer>
			</div>
		</FocusTrap>
	);
};

export default Drawer;
