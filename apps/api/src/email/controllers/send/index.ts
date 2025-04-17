import { getEmail } from "@lwo/cms";
import formData from "form-data";
import Mailgun from "mailgun.js";
import invariant from "tiny-invariant";
import { renderMarkdownAsHtml } from "utils/index.js";
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

function isValidParams(params: unknown): params is Params {
  return (
    typeof params === "object" &&
    params !== null &&
    "code" in params &&
    "recipient" in params &&
    typeof (params as Params).code === "string" &&
    typeof (params as Params).recipient === "string"
  );
}

export async function send(params: Params) {
  try {
    invariant(
      isValidParams(params),
      `Invalid request params: ${JSON.stringify(params)}`,
    );

    const {
      code,
      recipient,
      // data,
    } = params;

    const template = await getEmail(code);

    if (!template) {
      throw new Error(`Template not found for email code: ${code}`);
    }

    const {
      email_sender: { email: sender },
      subject,
      body,
    } = template;

    const html = await renderMarkdownAsHtml(body);

    if (!html) {
      throw new Error(`Error rendering HTML for email code: ${code}`);
    }

    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: sender,
      to: recipient,
      subject: subject,
      html: html,
    });

    console.log(result);
  } catch (error) {
    logError("Error sending email", error);
    throw error;
  }
}
