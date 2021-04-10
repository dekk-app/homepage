import { StyledButton } from "@/atoms/button/styled";
import { shortId } from "@/ions/utils/id";
import { pxToRem } from "@/ions/utils/unit";
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useCallback, useState } from "react";

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

const Modal = styled(motion.div)`
	display: flex;
	position: absolute;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: flex-end;
	max-width: 80vw;
	padding: 0;
	border-radius: ${pxToRem(18)};
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	color: #000;
`;

const ModalInner = styled(motion.div)`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	overflow: hidden;
`;

const ModalForm = styled(motion.div)`
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
	margin-bottom: ${pxToRem(64)};
	padding: 0 ${pxToRem(24)};
	overflow: hidden;

	input,
	textarea {
		display: block;
		width: 100%;
		border: 0;
		border-radius: 10px;
		background-color: #ecedee;
	}

	input {
		height: 60px;
	}
	textarea {
		flex: 1;
		resize: none;
	}
`;

const modalHeight = 600;
const modalWidth = 550;
const wishButtonWidth = 200;
const modalButtonWidth = 350;

const speed = 0.25;

const transition = {
	type: "spring",
	duration: speed,
	bounce: 0,
};

const modal = {
	open: {
		width: modalWidth,
		height: modalHeight,
		padding: 40,
		x: 0,
		y: modalHeight - 60,
		borderRadius: 18,
		transition,
	},
	closed: {
		width: wishButtonWidth,
		height: 60,
		padding: 0,
		x: 0,
		y: 0,
		borderRadius: 10,
		transition: {
			...transition,
			delay: speed,
		},
	},
};

const modalButton = {
	open: {
		width: modalButtonWidth,
		transition,
	},
	closed: {
		width: wishButtonWidth,
		transition,
	},
};

const headline = {
	open: {
		width: modalWidth - 80,
		opacity: 1,
		transition: {
			...transition,
			delay: speed,
		},
	},
	closed: {
		width: modalWidth - 80,
		opacity: 0,
		transition,
	},
};

const Wishlist: React.FC = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const openModal = useCallback(() => {
		setModalIsOpen(x => !x);
	}, []);
	return (
		<>
			<Global
				styles={css`
					body {
						background: #171924;
						color: white;
					}
				`}
			/>
			<Layout>
				<Grid>
					<Column colSpanL={6}>
						<Typography raw variant="h1">
							Tell us what you expect from a presentation software.
						</Typography>
					</Column>
					<WishWrapper colSpanL={6}>
						<Modal
							initial="closed"
							animate={modalIsOpen ? "open" : "closed"}
							variants={modal}
						>
							<ModalInner variants={headline}>
								<Typography centered variant="h2">
									What is your wish?
								</Typography>
								<ModalForm>
									<input />
									<br />
									<textarea />
								</ModalForm>
							</ModalInner>
							<StyledButton
								initial={{
									width: wishButtonWidth,
								}}
								type="button"
								variants={modalButton}
								onClick={openModal}
							>
								{modalIsOpen ? "Add my wish to the list" : "I have a wish"}
							</StyledButton>
						</Modal>
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
			</Layout>
		</>
	);
};

export default Wishlist;
