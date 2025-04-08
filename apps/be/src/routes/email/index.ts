import { sendEmail } from "controllers/index.js";
import express from "express";
import { EmailRequestBody, TypedRequestBody } from "types/index.js";

export const router = express.Router();

router.post("/", async (req: TypedRequestBody<EmailRequestBody>, res, next) => {
  try {
    console.log(JSON.stringify(req.body, null, 2));
    await sendEmail(req.body);

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
