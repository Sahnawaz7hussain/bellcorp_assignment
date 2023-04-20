const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();

const port = process.env.PORT || 8088;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running..");
});
app.listen(port, async () => {
  try {
    console.log("connecting with DATABASE");
    await connection;
    console.log("connected with DATABASE");
    console.log(`server running at http://localhost:${port}`);
  } catch (err) {
    console.log({ message: "DATABASE CONNECTION FAILED", err: err.message });
  }
});
