import { Renderer } from "@/ions/enums";
import dynamic from "next/dynamic";
import React from "react";

const Canvas = dynamic(async () => import("@/organisms/canvas"));
const Layout = dynamic(async () => import("@/organisms/layout"));

const Create: React.FC = ({ children }) => {
	return (
		<Layout>
			<Canvas renderer={Renderer.html} />
		</Layout>
	);
};

export default Create;
