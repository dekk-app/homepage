import { usePositionContext } from "@/ions/hooks/position";
import React from "react";
import { StyledInnerFrame, StyledOuterFrame } from "./styled";

const Frame: React.FC = ({ children, ...props }) => {
	const { x, y, z } = usePositionContext();

	return (
		<StyledOuterFrame {...props} data-test-id="outer-frame">
			<StyledInnerFrame
				style={{ transform: `translate3d(${x}px, ${y}px, 0) scale3d(${z}, ${z}, 1)` }}
				data-test-id="inner-frame"
			>
				{children}
			</StyledInnerFrame>
		</StyledOuterFrame>
	);
};

export default Frame;
