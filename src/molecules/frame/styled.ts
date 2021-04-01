import { PropsWithTheme } from "@/types/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledFrame = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const StyledInnerFrame = styled(StyledFrame)`
	transform-origin: 0 0;
`;

export const StyledOuterFrame = styled(StyledFrame)<PropsWithTheme>`
	overflow: hidden;
	${({
		theme: {
			ui: {
				layout: {
					main: { background },
				},
			},
		},
	}) => css`
		background: ${background};
	`};
`;
