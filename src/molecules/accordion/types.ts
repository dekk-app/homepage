export interface AccordionProps {
	heading: string;
	id: string;
	initiallyExpanded?: boolean;
	ellipsis?: boolean;
	faq?: boolean;
	headerComponent?: "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface AccordionContentProps {
	isExpanded?: boolean;
}
