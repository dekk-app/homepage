import Player from "@/atoms/lottie/player";
import contact from "@/ions/lottie/contact/data.json";
import React from "react";

const Contact = () => <Player animationData={contact as unknown as JSON} />;

export default Contact;
