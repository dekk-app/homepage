import { PageBodyLinks } from "@/types/contentful-api";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface DocumentToReactProps {
	json: RichTextDocument | null;
	links?: PageBodyLinks;
}
