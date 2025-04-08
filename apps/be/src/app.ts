import express from "express";
import { emailRouter } from "routes/index.js";
import { logError } from "utils/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/email", emailRouter);

app.listen(port, (err?) => {
  if (err) {
    logError({
      message: `Error starting server: ${err}`,
    });
  }

  console.log(`LWO back-end listening on port ${port}`);
});
