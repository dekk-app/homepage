import { RenderContext } from "@/ions/contexts/render";
import { Renderer } from "@/ions/enums";
import { Frame } from "@/molecules/frame";
import { StyledFrame } from "@/molecules/frame/styled";
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
