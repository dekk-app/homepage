import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledContextMenu = styled.div`
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	width: 200px;
	padding: 5px;
	border-radius: 3px;
	background: rgba(55, 55, 55, 0.9);
	box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.3);
	color: white;
	backdrop-filter: blur(3px);
	font-size: 14px;
	&:focus {
		outline: 0;
	}
`;

export const StyledContextMenuItem = styled.button<{ selected?: boolean }>`
	display: flex;
	width: 100%;
	padding: 5px 10px;
	border: 0;
	border-radius: 3px;
	font-size: 1em;
	${({ selected }) => css`
		background: ${selected ? "hsl(205, 100%, 39%)" : "unset"};
		color: ${selected ? "white" : "unset"};
	`};

	&[disabled] {
		opacity: 0.3;
		pointer-events: none;
	}

	&:focus {
		outline: 0;
	}
`;

export const StyledContextMenuDivider = styled.div`
	height: 1px;
	margin: 5px 10px;
	background: rgba(255, 255, 255, 0.2);
`;
