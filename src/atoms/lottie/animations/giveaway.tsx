import Player from "@/atoms/lottie/player";
import giveaway from "@/ions/lottie/giveaway/data.json";
import React from "react";

const Giveaway = () => <Player animationData={giveaway as unknown as JSON} />;

export default Giveaway;
