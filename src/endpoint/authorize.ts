import express from "express";

const router = express.Router();

router.get("/oauth/authroize", async (req, res) => {
  res.send({
    path: req.path,
  });
});

export default router;
