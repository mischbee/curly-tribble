const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;
const bodyparser = require("body-parser");
const app = express();

app.use("/static", express.static("./static/"));
app.use(bodyparser);

app.get("/val", (req, res) => {
  res.json(123);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/val", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
