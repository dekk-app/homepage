import Icon from "@/atoms/icon";
import React, { FC, useState } from "react";
import { FAQ_SCHEMA } from "./constants";
import { StyledAccordionButton, StyledAccordionContent, StyledAccordionHeading } from "./styled";
import { AccordionProps } from "./types";

const Accordion: FC<AccordionProps> = ({
	children,
	headerComponent,
	faq,
	heading,
	id,
	initiallyExpanded,
}) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);
	const schema = faq ? FAQ_SCHEMA : null;
	return (
		<div
			itemScope={schema ? true : undefined}
			itemProp={schema ? "mainEntity" : undefined}
			itemType={schema?.parentType || undefined}
		>
			<StyledAccordionHeading as={headerComponent}>
				<StyledAccordionButton
					role="button"
					aria-expanded={expanded ? "true" : "false"}
					aria-controls={id}
					id={`_${id}`}
					itemProp={schema ? "name" : undefined}
					onClick={() => {
						setExpanded(previousState => !previousState);
					}}
				>
					{heading}
					<Icon icon={expanded ? "chevronUp" : "chevronDown"} />
				</StyledAccordionButton>
			</StyledAccordionHeading>
			<StyledAccordionContent
				id={id}
				aria-labelledby={id}
				role="region"
				itemScope={schema ? true : undefined}
				itemProp={schema?.childProp || undefined}
				itemType={schema?.childType || undefined}
				isExpanded={expanded}
			>
				{children}
			</StyledAccordionContent>
		</div>
	);
};

export default Accordion;
