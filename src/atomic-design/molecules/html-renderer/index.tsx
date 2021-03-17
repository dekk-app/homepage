import { Frame, StyledFrame } from "@/atomic-design/atoms/frame";
import { RenderContext } from "@/context/render";
import { Renderer } from "@/enums";
import React from "react";

export const HTMLRenderer: React.FC = ({ children }) => {
	const context = React.useMemo(() => ({ renderer: Renderer.html }), []);
	return (
		<RenderContext.Provider value={context}>
			<StyledFrame data-test-id="html-renderer">
				<Frame>{children}</Frame>
			</StyledFrame>
		</RenderContext.Provider>
	);
};
