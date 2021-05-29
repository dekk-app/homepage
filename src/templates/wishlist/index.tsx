import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";
import { mock } from "./mock";
import { StyledCard, StyledLayout, StyledWishWrapper } from "./styled";

const Button = dynamic(async () => import("@/atoms/button"));
const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));

const Wishlist: React.FC = () => {
	const { t } = useTranslation(["wishlist"]);
	return (
		<StyledLayout>
			<Grid>
				<Column colSpanL={6}>
					<Typography raw variant="h1">
						{t("wishlist:headline")}
					</Typography>
				</Column>
				<StyledWishWrapper colSpanL={6}>
					<Button type="button">{t("wishlist:button.wish")}</Button>
				</StyledWishWrapper>
				{mock.map(({ title, description, id }, index) => (
					<StyledCard key={id} colSpanS={4} colStartL={index === 0 && 1}>
						<Typography variant="h3" component="h2">
							{title}
						</Typography>
						<Typography>{description}</Typography>
					</StyledCard>
				))}
			</Grid>
		</StyledLayout>
	);
};

export default Wishlist;
