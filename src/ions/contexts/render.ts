import { Renderer } from "@/ions/enums";
import React from "react";

export const RenderContext = React.createContext({ renderer: Renderer.html });
