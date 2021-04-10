import { PositionContext } from "@/ions/contexts/position";
import { Renderer } from "@/ions/enums";
import { useBoundingClientRect } from "@/ions/hooks/bounding-client-rect";
import { useXYZ } from "@/ions/hooks/xyz";
import { noBounce, noSelect } from "@/ions/styles";
// Import { debugging } from "@/pages/_app";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import React from "react";
import { StyledCanvasWrapper, StyledLayoutWrapper } from "./styled";

const Layout = dynamic(async () => import("@/organisms/layout"));
const Canvas = dynamic(async () => import("@/organisms/canvas"));
const Artboards = dynamic(async () => import("@/organisms/artboards"));
const ArtboardsProvider = dynamic(async () => import("@/organisms/artboards/provider"));
const CanvasContextMenu = dynamic(async () => import("./context-menu"));
const SidebarLeft = dynamic(async () => import("./sidebar-left"));
const SidebarRight = dynamic(async () => import("./sidebar-right"));
const Header = dynamic(async () => import("./header"));

const Create: React.FC = () => {
	const innerRef = React.useRef<HTMLDivElement>(null);
	const { x, y, z, zoom, setX, setY, setZ } = useXYZ<HTMLDivElement>(innerRef);
	const { height, width } = useBoundingClientRect<HTMLDivElement>(innerRef);
	const context = React.useMemo(() => ({ x, y, z, height, width, zoom, setX, setY, setZ }), [
		x,
		y,
		z,
		height,
		width,
		zoom,
		setX,
		setY,
		setZ,
	]);
	return (
		<PositionContext.Provider value={context}>
			<ArtboardsProvider>
				<Global styles={noBounce} />
				<Global styles={noSelect} />
				<StyledLayoutWrapper>
					<Layout header={Header} sidebarLeft={SidebarLeft} sidebarRight={SidebarRight}>
						<StyledCanvasWrapper ref={innerRef} data-test-id="canvas-wrapper">
							<Canvas renderer={Renderer.html}>
								<Artboards />
							</Canvas>
						</StyledCanvasWrapper>
					</Layout>
					<CanvasContextMenu outerRef={innerRef} />
				</StyledLayoutWrapper>
			</ArtboardsProvider>
		</PositionContext.Provider>
	);
};

export default React.memo(Create);
