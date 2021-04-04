import { RenderContext } from "@/ions/contexts/render";
import { Renderer } from "@/ions/enums";
import { noBounce } from "@/ions/styles";
import { Global } from "@emotion/react";
import React from "react";

const CanvasRenderer: React.FC = () => {
	const context = React.useMemo(() => ({ renderer: Renderer.html }), []);
	return (
		<RenderContext.Provider value={context}>
			<Global styles={noBounce} />
		</RenderContext.Provider>
	);
};

export default CanvasRenderer;
