import { email } from "controllers/index.js";
import express from "express";
import { logError } from "utils/index.js";

export const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    await email.send(req.body);

    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    logError("Failed to send email", error);
    res.status(500).json({
      error: "Failed to send email",
    });
  }
});
