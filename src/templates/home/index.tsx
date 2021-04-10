import { NextAuthProvider } from "@/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";

const Typography = dynamic(async () => import("@/atoms/typography"));
const Column = dynamic(async () => import("@/molecules/grid").then(mod => mod.Column));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Layout = dynamic(async () => import("@/organisms/layout"));
const Login = dynamic(async () => import("@/organisms/login"));

const speed = 0.5;

const background = {
	hidden: { x: "-100vw" },
	exit: { x: "100vw" },
	visible: {
		x: "0vw",
		transition: {
			duration: speed,
			ease: "easeOut",
		},
	},
};

const foreground = {
	hidden: { x: "-100vw" },
	exit: { x: "100vw" },
	visible: {
		x: 0,
		transition: {
			duration: speed,
			ease: "easeIn",
			delayChildren: speed,
		},
	},
};

const left = {
	hidden: { x: -100, opacity: 0 },
	exit: {
		x: -100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: speed,
			delay: speed,
			ease: "easeOut",
		},
	},
};

const center = {
	hidden: { opacity: 0 },
	exit: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: speed,
			ease: "easeOut",
		},
	},
};

const right = {
	hidden: { x: 100, opacity: 0 },
	exit: {
		x: 100,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: speed,
			delay: speed,
			ease: "easeOut",
		},
	},
};

const Background = styled(motion.div)`
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	${({ theme }) => css`
		background: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

const Foreground = styled(motion.div)`
	width: 100vw;
	min-height: 100vh;
	overflow: hidden;
	${({ theme }) => css`
		background: ${theme.ui.colors.theme.background};
		color: ${theme.ui.colors.theme.color};
	`};
`;

const StyledBox = styled(motion.div)`
	height: 540px;
	padding: 48px 32px;
	border-radius: 18px;
	background-image: radial-gradient(
		circle at 350px 150px,
		rgba(0, 0, 0, 0.1) 257px,
		transparent 257px
	);
	${({ theme }) => css`
		background-color: ${theme.ui.colors.primary.background};
		color: ${theme.ui.colors.primary.color};
	`};
`;

const Illustration = styled(motion.div)`
	height: 540px;
	background-image: url(/illustrations/bg_1.svg);
	background-repeat: no-repeat;
	background-position: 0% 50%;
	background-size: 100% auto;
`;

const two = {
	hidden: { y: "100vh", opacity: 0 },
	exit: {
		y: "-100vh",
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: speed,
			ease: "easeOut",
		},
	},
};

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
};

const Steps: React.FC<{ step: number; providers: NextAuthProvider }> = ({ step, providers }) => {
	return (
		<>
			<Column colSpanL={5}>
				<AnimatePresence exitBeforeEnter>
					<motion.div key={step} initial="hidden" animate="visible" exit="exit">
						{step === 0 ? (
							<motion.div variants={left}>
								<Login providers={providers} />
							</motion.div>
						) : (
							<motion.div variants={two}>
								<Typography variant="h2">Welcome to Dekk</Typography>
							</motion.div>
						)}
					</motion.div>
				</AnimatePresence>
			</Column>
			<Column colSpanL={3}>
				<Illustration variants={center} />
			</Column>
			<Column colSpanL={4} style={{ display: "flex", justifyContent: "stretch" }}>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						style={{ width: "100%" }}
					>
						{step === 0 ? (
							<StyledBox variants={right}>
								<Typography>Foo</Typography>
							</StyledBox>
						) : (
							<motion.div
								variants={two}
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
								}}
							>
								<Lottie
									options={defaultOptions}
									width={300}
									height={300 * (950 / 700)}
								/>
							</motion.div>
						)}
					</motion.div>
				</AnimatePresence>
			</Column>
		</>
	);
};

const Home: React.FC<{ providers: NextAuthProvider }> = ({ providers }) => {
	const [step, setStep] = useState(0);
	const next = React.useCallback(() => {
		setStep(previousValue => previousValue + 1);
	}, []);

	return (
		<Layout>
			<motion.div initial="hidden" animate="visible" exit="exit">
				<Background variants={background}>
					<Foreground variants={foreground}>
						<button type="button" onClick={next}>
							Next
						</button>
						<Grid>
							<Steps step={step} providers={providers} />
						</Grid>
					</Foreground>
				</Background>
			</motion.div>
		</Layout>
	);
};

export default Home;
