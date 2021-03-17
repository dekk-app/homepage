import { Template } from "@/ions/enums";
import dynamic from "next/dynamic";

const Create = dynamic(async () => import("./create"));
const Dashboard = dynamic(async () => import("./dashboard"));
const Home = dynamic(async () => import("./home"));

const templates = {
	[Template.home]: Home,
	[Template.dashboard]: Dashboard,
	[Template.create]: Create,
};

export default templates;
