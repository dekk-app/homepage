import Layout from "@/colonies/layout";
import { pxToRem } from "@/ions/utils/unit";
import { Column } from "@/molecules/grid";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledWishWrapper = styled(Column)`
	display: flex;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
`;

export const StyledLayout = styled(Layout)`
	${({ theme }) => css`
		padding-bottom: ${pxToRem(theme.spaces.xxl * 2)};
	`};
`;

export const StyledIconButton = styled.button`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	margin: ${pxToRem(-12)};
	border: 0;
	background: none;

	&[disabled] {
		opacity: 0.2;
	}
`;

export const StyledButtonGroup = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	justify-content: start;
	${({ theme }) => css`
		grid-column-gap: ${pxToRem(theme.spaces.xs)};
	`};
`;

export const StyledCard = styled(Column)`
	display: flex;
	flex-direction: column;
	padding: ${pxToRem(24)};
	border-radius: ${pxToRem(10)};
	background-color: white;
	box-shadow: 0 10px 20px rgba(106, 106, 106, 0.1);
	color: black;
`;

export const StyledVotes = styled.div`
	display: grid;
	grid-template-columns: ${pxToRem(24)} auto;
	align-items: center;
	${({ theme }) => css`
		grid-column-gap: ${pxToRem(theme.spaces.xxs)};
	`};
`;

export const StyledArticle = styled.article`
	flex: 1;
`;
