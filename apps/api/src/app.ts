import cors from "cors";
import { dbRouter } from "db/routes/index.js";
import { emailRouter } from "email/routes/index.js";
import express from "express";
import { paymentsRouter } from "payments/routes/index.js";
import { logError } from "utils/index.js";

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email
app.use("/email", emailRouter);
// DB
app.use("/db", dbRouter);
// Payments
app.use("/payments", paymentsRouter);

app.listen(port, (error?) => {
  if (error) {
    logError("Error starting server", error);
  }

  console.log(`LWO back-end listening on port ${port}`);
});
