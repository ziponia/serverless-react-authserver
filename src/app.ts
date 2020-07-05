import express from "express";
import asyncify from "express-asyncify";
import cors from "cors";
import logger from "morgan";

const app: express.Express = asyncify(express());

app.use(logger("combined"));
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({
    hello: "world",
  });
});

export default app;
