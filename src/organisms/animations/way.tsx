import Player from "@/atoms/lottie/player";
import way from "@/ions/lottie/way/data.json";
import React from "react";

const Way = () => <Player animationData={way as unknown as JSON} />;

export default Way;
