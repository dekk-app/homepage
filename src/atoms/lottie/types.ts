export interface Creator {
	name: string;
	url: string;
}

export interface PlayerProps {
	animationData: JSON;
	creator: Creator;
}
