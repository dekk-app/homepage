import { SpaceProps } from "@/atoms/space/types";
import { pxToRem } from "@/ions/utils/unit";
import { SpaceKey } from "@/types/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const colors: Record<SpaceKey, string> = {
	xxs: "hsl(0, 50%, 70%)",
	xs: "hsl(45, 50%, 70%)",
	s: "hsl(90, 50%, 70%)",
	m: "hsl(135, 50%, 70%)",
	l: "hsl(180, 50%, 70%)",
	xl: "hsl(225, 50%, 70%)",
	xxl: "hsl(270, 50%, 70%)",
};

export const StyledSpace = styled.div<SpaceProps>`
	display: block;
	flex-grow: 0;
	flex-shrink: 0;
	width: 100%;
	${({ theme, space }) => css`
		height: ${pxToRem(theme.spaces[space])};
		color: ${colors[space]};
		background: ${colors[space]};
	`};
`;
