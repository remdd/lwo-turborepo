import express from "express";
import { emailRouter } from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/email", emailRouter);

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }

  console.log(`LWO back-end listening on port ${port}`);
});
