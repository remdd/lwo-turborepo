import { getEmail } from "@lwo/cms";
import { NextFunction, Request, Response } from "express";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

export async function sendEmail(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> {
  const {
    code,
    // recipient,
    // data,
  } = req.body;

  const template = await getEmail(code);

  if (!template) {
    res.status(404);
    throw new Error("Template not found");
  }

  next();
}
