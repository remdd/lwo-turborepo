import { sendEmail } from "controllers/index.js";
import express from "express";

export const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // await sendEmail(req.body);
    await sendEmail({
      code: "test",
      recipient: "munkrat@gmail.com",
    });

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
