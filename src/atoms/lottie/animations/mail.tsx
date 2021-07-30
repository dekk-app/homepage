import Player from "@/atoms/lottie/player";
import mail from "@/ions/lottie/mail/data.json";
import React from "react";

const Mail = () => <Player animationData={mail as unknown as JSON} />;

export default Mail;
