import { PositionContext } from "@/ions/contexts/position";
import { Renderer } from "@/ions/enums";
import { useXYZ } from "@/ions/hooks/xyz";
import dynamic from "next/dynamic";
import React from "react";
import { StyledCanvasWrapper, StyledLayoutWrapper } from "./styled";

const Layout = dynamic(async () => import("@/organisms/layout"));
const Canvas = dynamic(async () => import("@/organisms/canvas"));
const Artboards = dynamic(async () => import("@/organisms/artboard/artboards"));
const ArtboardProvider = dynamic(async () => import("@/organisms/artboard/artboards-provider"));
const CanvasContextMenu = dynamic(async () => import("./context-menu"));

const Create: React.FC = () => {
	const outerRef = React.useRef<HTMLDivElement>(null);
	const innerRef = React.useRef<HTMLDivElement>(null);
	const { x, y, z } = useXYZ<HTMLDivElement>(innerRef);
	const context = React.useMemo(() => ({ x, y, z }), [x, y, z]);

	return (
		<StyledLayoutWrapper ref={outerRef}>
			<PositionContext.Provider value={context}>
				<ArtboardProvider>
					<Layout>
						<StyledCanvasWrapper ref={innerRef}>
							<Canvas renderer={Renderer.html}>
								<Artboards />
							</Canvas>
						</StyledCanvasWrapper>
						<CanvasContextMenu outerRef={outerRef} />
					</Layout>
				</ArtboardProvider>
			</PositionContext.Provider>
		</StyledLayoutWrapper>
	);
};

export default Create;
