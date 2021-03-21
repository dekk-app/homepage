import React from "react";
import { StyledMain } from "./styled";

const Main = React.forwardRef<HTMLDivElement>(({ children, ...props }, ref) => (
	<StyledMain {...props} ref={ref}>
		{children}
	</StyledMain>
));

export default Main;
