import { TypographyProps } from "@/atoms/typography/types";
import dynamic from "next/dynamic";
import React, { FC } from "react";

const TitleText = dynamic(() => import("./title-text"));
const SubTitleText = dynamic(() => import("./subtitle-text"));
const H1Text = dynamic(() => import("./h1-text"));
const H2Text = dynamic(() => import("./h2-text"));
const H3Text = dynamic(() => import("./h3-text"));
const BodyText = dynamic(() => import("./body-text"));
const Body2Text = dynamic(() => import("./body2-text"));

const Typography: FC<TypographyProps> = ({ children, component, variant, ...props }) => {
	switch (variant) {
		case "title":
			return <TitleText {...props}>{children}</TitleText>;
		case "subtitle":
			return <SubTitleText {...props}>{children}</SubTitleText>;
		case "h1":
			return <H1Text {...props}>{children}</H1Text>;
		case "h2":
			return <H2Text {...props}>{children}</H2Text>;
		case "h3":
			return <H3Text {...props}>{children}</H3Text>;
		case "body2":
			return <Body2Text {...props}>{children}</Body2Text>;
		case "body":
		default:
			return <BodyText {...props}>{children}</BodyText>;
	}
};

export default Typography;
