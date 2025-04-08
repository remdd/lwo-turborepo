import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { logError } from "utils/log-error/index.js";

export async function renderMarkdownAsHtml(
  markdown: string,
): Promise<string | undefined> {
  try {
    const html = await marked(markdown);
    const sanitizedHtml = sanitizeHtml(html);

    return sanitizedHtml;
  } catch (error) {
    logError({
      message: "Error rendering markdown as HTML",
      error,
    });

    return undefined;
  }
}
