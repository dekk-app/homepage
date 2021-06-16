import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import Layout from "@/organisms/layout";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	${({ theme }) => css`
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};

		@media only screen and ${theme.mq.l} {
			background-image: url(/illustrations/bg_1.svg);
			background-repeat: no-repeat;
			background-position: 50% 50%;
			background-size: auto 540px;
		}
	`};
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
