import { options } from "@/molecules/document-to-react/options";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import React, { FC } from "react";

export const DocumentToReact: FC<{ json: RichTextDocument | null }> = ({ json }) =>
	json ? <>{documentToReactComponents(json, options)}</> : null;
