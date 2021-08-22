import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Player = dynamic(async () => import("@/atoms/lottie/player"));

const Come = () => {
	const [animationData, setAnimationData] = useState<JSON>(null);
	useEffect(() => {
		void import("@/ions/lottie/come/data.json").then(mod => {
			setAnimationData(mod.default as unknown as JSON);
		});
	}, []);
	return animationData && <Player animationData={animationData} />;
};

export default Come;
