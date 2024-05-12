import express from "express";
import routes from "./routes";
import logger from "./utils/logger";

const app = express();

app.get("/", logger, (req, res) => {
  res.send("Welcome to image processing apps.");
});

app.use("/api", logger, routes);

export default app;
