import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err?) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Example app listening on port ${port}`);
});
