import { ContactFormProps } from "@/types";
import { NextApiHandler } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	secure: true,
	auth: {
		type: "OAuth2",
		user: process.env.CONTACT_CLIENT_EMAIL,
		serviceClient: process.env.CONTACT_SERVICE_CLIENT,
		privateKey: process.env.CONTACT_PRIVATE_KEY,
	},
});

const handler: NextApiHandler = async (request, response) => {
	const body = request.body as ContactFormProps;
	try {
		await transporter.verify();
		await transporter.sendMail({
			from: process.env.CONTACT_CLIENT_EMAIL,
			to: "contact@dekk.app",
			replyTo: body.email,
			subject: `Contact via Homepage from ${body.email}`,
			text: body.body,
		});
		response.send({ success: true });
	} catch (error_: unknown) {
		console.log(error_);
		response.send({ error: true });
	}
};

export default handler;
