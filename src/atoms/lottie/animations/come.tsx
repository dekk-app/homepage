import Player from "@/atoms/lottie/player";
import { creator } from "@/ions/lottie/come/creator";
import come from "@/ions/lottie/come/data.json";
import React from "react";

const Come = () => <Player animationData={come} creator={creator} />;

export default Come;
