import { css } from "@emotion/react";
import React, { FC } from "react";
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

const WelcomeLottie: FC = () => (
	<Lottie options={defaultOptions} width={300} height={(300 / 700) * 950} />
);

export default WelcomeLottie;
