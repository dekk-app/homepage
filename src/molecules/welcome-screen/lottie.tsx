import { css } from "@emotion/react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "./data.json";

const styles = css`
	margin: auto;
`;

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
	className: styles,
};

const WelcomeLottie = () => <Lottie options={defaultOptions} width="100%" />;

export default WelcomeLottie;
