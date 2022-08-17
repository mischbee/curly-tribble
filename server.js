const express = require("express");
const app = express();
require("dotenv").config();

const path = require("path");
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/val", (req, res) => {
  console.log("Te123123st");
  res.json(123);
});

app.get("/", (req, res) => {
  console.log("Tessst");
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.post("/val", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
