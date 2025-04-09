// @TODO - add proper error logging / reporting

export function logError(message: string, error: unknown): void {
  console.error(`Error logged: "${message}"`);
  console.error(error);
}
