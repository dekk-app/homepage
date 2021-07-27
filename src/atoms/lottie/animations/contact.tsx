import Player from "@/atoms/lottie/player";
import { creator } from "@/ions/lottie/contact/creator";
import contact from "@/ions/lottie/contact/data.json";
import React from "react";

const Contact = () => <Player animationData={contact} creator={creator} />;

export default Contact;
