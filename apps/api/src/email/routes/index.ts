import { send } from "email/controllers/index.js";
import express from "express";
import { logError } from "utils/index.js";

export const emailRouter = express.Router();

emailRouter.post("/", async (req, res, next) => {
  try {
    await send(req.body);

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
