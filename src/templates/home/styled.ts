import Layout from "@/colonies/layout";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`;

export const StyledProBox = styled.div`
	width: 100%;
	border-radius: 18px;
	background-image: radial-gradient(
		circle at 350px 150px,
		rgba(0, 0, 0, 0.1) 257px,
		transparent 257px
	);
	${({ theme }) => css`
		padding: ${pxToRem(theme.spaces.xl)} ${pxToRem(theme.spaces.l)};
		background-color: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

export const StyledColumn = styled(Column)`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
