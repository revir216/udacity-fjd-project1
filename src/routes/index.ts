import express from "express";
import images from "./api/images";
import notes from "./api/notes";

const routes = express.Router();
routes.use("/images", images);
routes.use("/notes", notes);

routes.get("", (req, res): void => {
  res.status(200).send("please check document for specific API");
});
export default routes;
