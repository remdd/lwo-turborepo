import pg from "pg";

export const getDbClient = () => {
  const { Client } = pg;

  return new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    ssl: {
      rejectUnauthorized: false,
    },
  });
};
