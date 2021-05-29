import { StyledButton } from "@/atoms/button/styled";
import { shortId } from "@/ions/utils/id";
import { pxToRem } from "@/ions/utils/unit";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import React from "react";

const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));

const titles = [
	"Nunquam locus abactus",
	"Nunquam demitto species",
	"Cur canis messis",
	"Nunquam consumere hibrida",
	"Cur candidatus crescere",
	"Cur zeta persuadere",
	"Nunquam desiderium scutum",
];

const descriptions = [
	"Guttus bassus repressor est. Albus, camerarius rectors recte convertam de castus, mirabilis genetrix.",
	"Cur lacta tolerare? Zirbus resisteres, tanquam peritus extum. Talis armarium hic contactuss adgium est.",
	"Tuss velum, tanquam camerarius fermium. Brevis, placidus toruss grauiter acquirere de gratis, talis itineris tramitem.",
	"Eleates messiss, tanquam noster gallus. Cum equiso cadunt, omnes tuses aperto clemens, mirabilis coordinataees.",
	"Pol, a bene ratione. Cum exemplar unda, omnes cannabises imperium grandis, fatalis fluctuies.",
	"Heu, vita! Orgia fidelis axona est. Cum armarium potus, omnes rationees transferre altus, rusticus fermiumes.",
	"Nix ortums, tanquam bassus luna. Castus, pius imbers absolute gratia de ferox, teres habitio.",
	"Mirabilis cursuss ducunt ad brabeuta. Emeritis, fortis orgias etiam attrahendam de raptus, camerarius cursus.",
];

const Card = styled(Column)`
	padding: ${pxToRem(24)};
	border-radius: ${pxToRem(10)};
	background-color: rgba(106, 40, 234, 0.1);
`;

const WishWrapper = styled(Column)`
	display: flex;
	align-content: flex-end;
	align-items: flex-end;
	justify-content: flex-end;
`;

const StyledLayout = styled(Layout)`
	${({ theme }) => css`
		background-color: ${theme.ui.colors.dark.background};
		color: ${theme.ui.colors.dark.color};
	`};
`;

const Wishlist: React.FC = () => {
	return (
		<StyledLayout>
			<Grid>
				<Column colSpanL={6}>
					<Typography raw variant="h1">
						Tell us what you expect from a presentation software.
					</Typography>
				</Column>
				<WishWrapper colSpanL={6}>
					<StyledButton type="button">I have a wish</StyledButton>
				</WishWrapper>
				{Array.from({ length: 12 })
					.fill(Boolean)
					.map((x, i) => (
						<Card key={shortId.encode(i)} colSpanS={4} colStartL={i === 0 && 1}>
							<Typography variant="h3" component="h2">
								{titles[i % titles.length]}
							</Typography>
							<Typography>{descriptions[i % descriptions.length]}</Typography>
						</Card>
					))}
			</Grid>
		</StyledLayout>
	);
};

export default Wishlist;
