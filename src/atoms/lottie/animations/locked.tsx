import Player from "@/atoms/lottie/player";
import { creator } from "@/ions/lottie/locked/creator";
import locked from "@/ions/lottie/locked/data.json";
import React from "react";

const Locked = () => <Player animationData={locked} creator={creator} />;

export default Locked;
