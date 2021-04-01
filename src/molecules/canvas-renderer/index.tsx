import { RenderContext } from "@/ions/contexts/render";
import { Renderer } from "@/ions/enums";
import { useWindowResize } from "@/ions/hooks/window";
import { globalStyles, noBounce } from "@/ions/styles";
import { Global } from "@emotion/react";
import dynamic from "next/dynamic";
import React from "react";
import { Group, Layer, Stage, Text } from "react-konva";

const Frame = dynamic(async () => import("@/molecules/frame"));
const StyledFrame = dynamic<React.ComponentPropsWithRef<React.ElementType>>(async () =>
	import("@/molecules/frame/styled").then(mod => mod.StyledFrame)
);

const CanvasRenderer: React.FC = ({ children }) => {
	const context = React.useMemo(() => ({ renderer: Renderer.html }), []);
	const ref = React.useRef<HTMLDivElement>(null);
	const [box, setBox] = React.useState({ width: 0, height: 0 });
	const handleResize = React.useCallback(() => {
		const width = ref.current?.offsetWidth;
		const height = ref.current?.offsetHeight;
		setBox({ width, height });
	}, [ref]);
	useWindowResize(handleResize);
	const [p, setP] = React.useState({ x: 0, y: 0, z: 1 });
	const scale = React.useMemo(() => ({ x: p.z, y: p.z }), [p.z]);

	return (
		<RenderContext.Provider value={context}>
			<Global styles={globalStyles} />
			<Global styles={noBounce} />
			<div ref={ref} style={{ height: "100%", width: "100%", background: "red" }}>
				<Stage
					width={box.width}
					height={box.height}
					onWheel={({ evt }) => {
						const f = 0.95;
						const { deltaY } = evt;
						if (Math.abs(deltaY) > 0) {
							const _f = deltaY > 0 ? f : 1 / f;
							setP(previousState => ({ ...previousState, z: previousState.z * _f }));
						}
					}}
				>
					<Layer x={p.x} y={p.x} scale={scale}>
						<Group>
							<Text
								draggable
								text="Enter a Title"
								fontFamily="Poppins"
								fontSize={23}
								fill="black"
								align="center"
								verticalAlign="center"
								width={ref.current?.offsetWidth}
								height={100}
							/>
						</Group>
					</Layer>
				</Stage>
			</div>
		</RenderContext.Provider>
	);
};

export default CanvasRenderer;
