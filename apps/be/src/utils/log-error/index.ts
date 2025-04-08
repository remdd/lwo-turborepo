// @TODO - add proper error logging / reporting

type Error = {
  message: string;
  error: unknown;
};

export function logError(error: Error): void {
  console.error(`Error logged: "${error.message}"`);
  // console.error(error.error);
}
