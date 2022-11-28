const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

router.post("/", (req, res) => {});

router.patch("/", (req, res) => {});

router.post("/", (req, res) => {});

module.exports = router;
