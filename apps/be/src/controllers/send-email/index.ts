import { getEmail } from "@lwo/cms";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { logError } from "utils/log-error/index.js";

type Params = {
  code: string;
  recipient: string;
};

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

export async function sendEmail(params: Params) {
  try {
    const {
      code,
      recipient,
      // data,
    } = params;

    const template = await getEmail(code);

    if (!template) {
      throw new Error("Template not found");
    }

    const {
      email_sender: { email: sender },
      subject,
      body,
    } = template;

    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: sender,
      to: recipient,
      subject: subject,
      html: body,
    });

    console.log(result);
  } catch (error) {
    logError({ message: "Error sending email" });
    throw error;
  }
}
