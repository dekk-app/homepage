import { RenderContext } from "@/ions/contexts/render";
import { Renderer } from "@/ions/enums";
import dynamic from "next/dynamic";
import React from "react";

const Frame = dynamic(async () => import("@/molecules/frame"));
const StyledFrame = dynamic<React.ComponentPropsWithRef<React.ElementType>>(async () =>
	import("@/molecules/frame/styled").then(mod => mod.StyledFrame)
);

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
