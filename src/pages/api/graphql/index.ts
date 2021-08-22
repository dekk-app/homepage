import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	response.send({ status: 200, data: { wishes: [] } });
};

export default handler;
