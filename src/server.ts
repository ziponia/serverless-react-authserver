/**
 * fix: ReferenceError: regeneratorRuntime is not defined
 *
 * @see https://medium.com/@jongmoon.yoon/mocha-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EC%97%90-async-await-%EC%A0%81%EC%9A%A9-%EC%9D%B4%EC%8A%88-8d18f81cb44c
 */
import "../pollyfill";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import serverless from "serverless-http";
import "source-map-support/register";

import app from "./app";

const server = serverless(app);

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  const result = await server(event, context);
  return result;
};
