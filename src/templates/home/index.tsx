import { ClientSafeProvider, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import animationData from "./data.json";
import { StyledColumn, StyledLayout, StyledProBox } from "./styled";
import { lottieStyles } from "./styles";

const Lottie = dynamic(async () => import("react-lottie"));
const Button = dynamic(async () => import("@/atoms/button"));
const Typography = dynamic(async () => import("@/atoms/typography"));
const Grid = dynamic(async () => import("@/molecules/grid").then(mod => mod.Grid));
const Login = dynamic(async () => import("@/organisms/login"));

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice",
	},
	className: lottieStyles,
};

const Steps: React.FC<{ step: number; providers: Record<string, ClientSafeProvider> }> = ({
	step,
	providers,
}) => {
	return (
		<Grid>
			<StyledColumn colSpanS={4}>
				{step === 0 ? (
					<Login providers={providers} />
				) : (
					<>
						<Typography variant="h2">We are happy to have you on board.</Typography>
						<Typography>
							We can´t build the best product without you!
							<br />
							Visit our wishlist and help us.
						</Typography>
						<Link passHref href="/wishlist">
							<Button as="a">I have a wish</Button>
						</Link>
					</>
				)}
			</StyledColumn>
			<StyledColumn colSpanS={4} colStartL={9}>
				{step === 0 ? (
					<StyledProBox>
						<Typography variant="h2">Get a free Pro account!</Typography>
						<Typography>Reduced Prices on Marketplace apps</Typography>
						<Typography>Unlimited Presentations</Typography>
						<Typography>Unlimited Teams</Typography>
						<Typography>Unlimited Libraries</Typography>
						<Typography>5GB Storage</Typography>
						<Typography>200MB Uploads</Typography>
						<Typography>… and much more</Typography>
					</StyledProBox>
				) : (
					<Lottie options={defaultOptions} width={300} height={(300 / 700) * 950} />
				)}
			</StyledColumn>
		</Grid>
	);
};

const Home: React.FC<{ providers: Record<string, ClientSafeProvider> }> = ({ providers }) => {
	const [session] = useSession();
	const [step, setStep] = useState(session ? 1 : 0);

	useEffect(() => {
		if (session) {
			setStep(1);
		}
	}, [session]);

	return (
		<StyledLayout>
			<Steps step={step} providers={providers} />
		</StyledLayout>
	);
};

export default Home;
