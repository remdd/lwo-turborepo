import { db } from "controllers/index.js";
import express from "express";
import { logError } from "utils/index.js";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log(req.params);
    const data = await db.bookings.list();
    console.log("Returning data:");
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    logError("Failed to get calendar data", error);
    res.status(500).json({
      error: "Failed to get calendar data",
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    await db.bookings.create({ message: "test" });
    // await sendEmail(req.body);

    res.status(200).json({
      message: "DB record saved successfully",
    });
  } catch (error) {
    logError("Failed to save DB record", error);
    res.status(500).json({
      error: "Failed to save DB record",
    });
  }
});
