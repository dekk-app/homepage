import React from "react";
import Lottie from "react-lottie-player";
import { styles } from "./styles";
import { PlayerProps } from "./types";

const Player = ({ animationData }: PlayerProps) => {
	return <Lottie loop play style={styles} animationData={animationData} />;
};

export default Player;
