import { useArtboardContext } from "@/ions/hooks/context";
import { useContextMenu } from "@/ions/hooks/context-menu";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

const ContextMenu = dynamic(async () => import("@/molecules/context-menu"));

const CanvasContextMenu = ({ outerRef }) => {
	const { t } = useTranslation(["context-menu"]);
	const { remove, add } = useArtboardContext();
	const contextMenu = useContextMenu(outerRef);
	const items = React.useMemo(() => {
		return [
			[
				{
					label: t("context-menu:new-artboard"),
					id: "artboard:add",
					onClick: add,
				},
				{
					label: t("context-menu:remove"),
					id: "artboard:remove",
					onClick: remove,
				},
			],
		];
	}, [add, remove, t]);

	return contextMenu.isOpen && <ContextMenu items={items} contextMenu={contextMenu} />;
};

export default CanvasContextMenu;
