import { getDbClient } from "utils/index.js";

type Params = {};

export async function list(params?: Params) {
  console.log(params);
  const client = getDbClient();

  try {
    console.log("Connecting to DB...");
    await client.connect();
    console.log("Connected to DB!");
    const res = await client.query("SELECT * FROM test");
    console.log(JSON.stringify(res));
    await client.end();
    return res.rows;
  } catch (error) {
    console.error(error);
    await client.end();
    throw new Error("DB connection closed");
  }
}
