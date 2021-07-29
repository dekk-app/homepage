import Player from "@/atoms/lottie/player";
import locked from "@/ions/lottie/locked/data.json";
import React from "react";

const Locked = () => <Player animationData={locked as unknown as JSON} />;

export default Locked;
