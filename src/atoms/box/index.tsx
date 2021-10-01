import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { CSSProperties, FC } from "react";

const StyledBox = styled.div<{
	style?: CSSProperties & { "--aspect-ratio"?: number };
	roundCorners?: boolean;
}>`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: calc(100% / var(--aspect-ratio, 1));
	${({ theme, roundCorners }) =>
		roundCorners &&
		css`
			border-radius: ${theme.shapes.m};
			overflow: hidden;
		`};
`;

const StyledBoxInner = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export interface BoxProps {
	aspectRatio?: number;
	roundCorners?: boolean;
}

const Box: FC<BoxProps> = ({ aspectRatio = 1, roundCorners, children, ...props }) => {
	return (
		<StyledBox {...props} style={{ "--aspect-ratio": aspectRatio }} roundCorners={roundCorners}>
			<StyledBoxInner>{children}</StyledBoxInner>
		</StyledBox>
	);
};

export default Box;
