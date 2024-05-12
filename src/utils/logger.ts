import express from "express";

const logger = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let url = req.originalUrl;
  console.log(`Accessing URL: ${url} - Method: ${req.method}`);
  next();
};

export default logger;
