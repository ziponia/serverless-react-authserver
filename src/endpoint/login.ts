import express from "express";
import nextApp from "next";

const router = express.Router();

const app = nextApp({
  dev: process.env.NODE_ENV !== "production",
  customServer: true,
});
const handler = app.getRequestHandler();

router.get("/login", async (req, res) => {
  await app.prepare();
  return handler(req, res);

  return app.render(req, res, "/login");
});

export default router;
