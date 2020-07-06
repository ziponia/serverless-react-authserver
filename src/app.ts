import express from "express";
import asyncify from "express-asyncify";
import cors from "cors";
import logger from "morgan";
import path from "path";
import fs from "fs";

// token endpoint
import tokenEndpoint from "./endpoint";

const app: express.Express = asyncify(express());

app.use(logger("combined"));
app.use(cors());
app.use(express.json());

app.use("/_next", express.static(path.resolve(".next")));

app.use(tokenEndpoint.authorize);
app.use(tokenEndpoint.token);
app.use(tokenEndpoint.login);

app.get("/test", (req, res) => {
  res.json({
    hello: "world",
  });
});

// error handler
app.use("*", (req, res) => {
  res.status(404).json({
    status: res.statusCode,
    message: `${req.path} is not found`,
  });
});

export default app;
