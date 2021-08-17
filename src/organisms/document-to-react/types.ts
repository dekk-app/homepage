import { ImageText, PageBodyLinks, Person } from "@/types/contentful-api";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

export interface DocumentToReactProps {
	json: RichTextDocument | null;
	links?: PageBodyLinks;
}

export type EntryBlock = ImageText | Person;
