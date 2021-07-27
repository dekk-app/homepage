import Typography from "@/atoms/typography";
import { StyledLink } from "@/atoms/typography/styled";
import React, { useMemo } from "react";
import Lottie, { Options } from "react-lottie";
import { options as defaultOptions } from "./options";
import { PlayerProps } from "./types";

const Player = ({ animationData, creator }: PlayerProps) => {
	const options: Options = useMemo(() => ({ ...defaultOptions, animationData }), [animationData]);
	return (
		<>
			<Lottie options={options} />
			<Typography variant="caption" light>
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
