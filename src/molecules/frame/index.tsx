import { usePositionContext } from "@/ions/hooks/position";
import { globalStyles, noBounce } from "@/ions/styles";
import { Global } from "@emotion/react";
import React from "react";
import { StyledInnerFrame, StyledOuterFrame } from "./styled";

const Frame: React.FC = ({ children, ...props }) => {
	const ref = React.useRef(null);
	const { x, y, z } = usePositionContext();

	return (
		<>
			<Global styles={globalStyles} />
			<Global styles={noBounce} />
			<StyledOuterFrame {...props} ref={ref} data-test-id="outer-frame">
				<StyledInnerFrame
					style={{ transform: `translate(${x}px, ${y}px) scale(${z}, ${z})` }}
					data-test-id="inner-frame"
				>
					{children}
				</StyledInnerFrame>
			</StyledOuterFrame>
		</>
	);
};

export default Frame;
