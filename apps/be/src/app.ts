import express from "express";
import { dbRouter, emailRouter } from "routes/index.js";
import { logError } from "utils/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/email", emailRouter);
app.use("/db", dbRouter);

app.listen(port, (error?) => {
  if (error) {
    logError({
      message: `Error starting server`,
      error,
    });
  }

  console.log(`LWO back-end listening on port ${port}`);
});
