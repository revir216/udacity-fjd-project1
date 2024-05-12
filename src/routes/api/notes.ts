import express from "express";

const notes = express.Router();

notes.get("", (req, res) => {
  res.send("get Notes");
});

notes.post("", (req, res) => {
  res.send("send NOte successfully");
});

export default notes;
