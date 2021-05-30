import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Layout = dynamic(async () => import("@/organisms/layout"));

export const StyledWishWrapper = styled(Column)`
	display: flex;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
`;

export const StyledLayout = styled(Layout)`
	${({ theme }) => css`
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

export const StyledCard = styled(Column)`
	padding: ${pxToRem(24)};
	border-radius: ${pxToRem(10)};
	background-color: rgba(106, 40, 234, 0.1);
`;
