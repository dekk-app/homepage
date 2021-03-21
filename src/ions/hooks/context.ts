import { ArtboardContext } from "@/ions/contexts/artboard";
import { RenderContext } from "@/ions/contexts/render";
import React from "react";

export const useRenderContext = () => React.useContext(RenderContext);

export const useArtboardContext = () => React.useContext(ArtboardContext);
