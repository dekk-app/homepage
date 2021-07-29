import Player from "@/atoms/lottie/player";
import come from "@/ions/lottie/come/data.json";
import React from "react";

const Come = () => <Player animationData={come as unknown as JSON} />;

export default Come;
