import Player from "@/atoms/lottie/player";
import { creator } from "@/ions/lottie/way/creator";
import way from "@/ions/lottie/way/data.json";
import React from "react";

const Way = () => <Player animationData={way as unknown as JSON} creator={creator} />;

export default Way;
