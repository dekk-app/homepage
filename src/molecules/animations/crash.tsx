import Player from "@/atoms/lottie/player";
import crash from "@/ions/lottie/crash/data.json";
import React from "react";

const Crash = () => <Player animationData={crash as unknown as JSON} />;

export default Crash;
