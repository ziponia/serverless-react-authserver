import express from "express";

const router = express.Router();

router.post("/oauth/token", (req, res) => {
  res.json({
    describe: req.path,
  });
});

export default router;
