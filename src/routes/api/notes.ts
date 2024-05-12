import express from "express";

const notes = express.Router();

notes.get("", (req, res): void => {
  res.send("Notes API response status: 200");
});

export default notes;
