// @TODO - add proper error logging / reporting

type Error = {
  message: string;
};

export function logError(error: Error) {
  // console.error(error);
  console.error(`\nError: ${error}\n`);
}
