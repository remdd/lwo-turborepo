import express from "express";
import { sendEmail } from "src/controllers/index.js";

export const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    await sendEmail(req, res, next);
    res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: "Failed to send email",
    });
  }
});
