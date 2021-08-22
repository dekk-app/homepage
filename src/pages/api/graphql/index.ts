import { GraphQLRequest } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	const { operationName } = request.body as GraphQLRequest;
	if (operationName) {
		response.send({
			status: 200,
			data: {
				[operationName]: [],
			},
		});
	} else {
		response.send({
			status: 500,
		});
	}
};

export default handler;
