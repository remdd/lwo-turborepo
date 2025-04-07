import express from "express";
import { send } from "./controllers/index.js";

export const app = express();
const port = process.env.PORT || 3000;

app.post("/send", send);

app.get("/send", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Example app listening on port ${port}`);
});
