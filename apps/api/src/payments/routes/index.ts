import express from "express";
import { logError } from "utils/index.js";

export const paymentsRouter = express.Router();

paymentsRouter.post("/", async (req, res, next) => {
  try {
    console.log("hello from payments router!");

    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    logError("Failure", error);
    res.status(500).json({
      error: "Failure",
    });
  }
});
