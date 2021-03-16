import { Frame, StyledFrame } from "@/atomic-design/atoms/frame";
import { RenderContext } from "@/context/render";
import { Renderer } from "@/enums";
import React from "react";

export const HTMLRenderer: React.FC = ({ children }) => {
	return (
		<RenderContext.Provider value={{ renderer: Renderer.html }}>
			<StyledFrame data-test-id="html-renderer">
				<Frame>{children}</Frame>
			</StyledFrame>
		</RenderContext.Provider>
	);
};
