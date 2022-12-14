require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const studentListRoutes = require("../routes/students");
app.use("/students", studentListRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
