import { getEmail, type CMS } from "@lwo/cms";
import { NextFunction, Request, Response } from "express";

type Params = {
  recipient: string;
  email: CMS.Email;
  // @TODO - type data
  data: any;
};

export async function send(
  req: Request<Params>,
  res: Response,
  next: NextFunction,
): Promise<any> {
  console.log(req);

  const {
    recipient,
    email,
    email: { code },
    data,
  } = req.body;

  try {
    const template = await getEmail(code);

    console.log(template);
    next();
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: "Failed to get email template",
    });
  }
}
