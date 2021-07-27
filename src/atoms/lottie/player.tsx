import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import React from "react";
import Lottie from "react-lottie-player";
import { styles } from "./styles";
import { PlayerProps } from "./types";

const Player = ({ animationData, creator }: PlayerProps) => {
	return (
		<>
			<Lottie loop play style={styles} animationData={animationData} />
			<Typography light variant="caption">
				Animation by{" "}
				<StyledLink href={creator.url} rel="nofollow" target="_blank">
					{creator.name}
				</StyledLink>
				.
			</Typography>
		</>
	);
};

export default Player;
