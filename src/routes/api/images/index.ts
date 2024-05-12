import express from "express";
import { ImageQueryParams } from "./interface/imageQueryParams";
import { getImage } from "./service/imagesService";

const images = express.Router();

images.get("", async (req, res) => {
  try {
    const params = new ImageQueryParams(req.query);
    if (!params) {
      return res.status(400).send("Missing file name!");
    }
    const imagePath = await getImage(params);
    return res.status(200).sendFile(imagePath);
  } catch (e) {
    return res.status(400).send("Missing file name!");
  }
});

export default images;
