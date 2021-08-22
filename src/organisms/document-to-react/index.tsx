import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useMemo } from "react";
import { getOptions } from "./get-options";
import { simpleOptions } from "./simple-options";
import { DocumentToReactProps } from "./types";

export const DocumentToReact = ({ json, links }: DocumentToReactProps) => {
	const options = useMemo(() => (links ? getOptions(links) : simpleOptions), [links]);
	return json ? <>{documentToReactComponents(json, options)}</> : null;
};
