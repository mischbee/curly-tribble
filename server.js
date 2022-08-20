const express = require("express");
const bodyParser = require("body-parser");
// import { userList } from "/./src/static/userOptions";
require("dotenv").config();
const db = require("./db.js");
const app = express();
const sql = require("./sqlStatements");

// db.connect().then(console.log);

const path = require("path");
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get("/val", (req, res) => {});

app.get("/", (req, res) => {
  console.log("Tessst");
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.post("/transaction", ({ body }, res) => {
  const { user, val, transacationdate } = body;
  db.query(sql.insertVal(user, val, transacationdate || "")).then(console.log);
  res.json(body);
});

app.get("/user", (req, res) => {
  const { id } = req.query;

  db.query(
    `${sql.select("value")} where username = '${id}' AND ` + sql.dateFilter
  )
    .then((vals) =>
      vals.reduce(({ value: prev }, { value: next }) => {
        prev = prev || 0;
        next = next || 0;
        return prev + next;
      }, 0)
    )
    .then((total) => {
      res.json(total);
    })
    .catch(console.error);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
