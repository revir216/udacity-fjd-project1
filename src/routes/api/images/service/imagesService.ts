import { IMAGE_PATH, THUMB_PATH } from "../../../../utils/constants";
import fs from "fs";
import { ImageQueryParams } from "../interface/imageQueryParams";
import sharp from "sharp";

export const getImagePath = (fileName: string): string => {
  return IMAGE_PATH.concat(fileName).concat(".jpg");
};

export const getSaveImagePath = (file: ImageQueryParams): string => {
  return THUMB_PATH.concat(file.fileName || "").concat(
    `w${file.width}h${file.height}.jpg`
  );
};

export const checkImagesExist = (imagePath: string) => {
  return fs.existsSync(imagePath);
};

export const getImage = async (image: ImageQueryParams) => {
  if (image.fileName && !image.height && !image.width) {
    return getImagePath(image.fileName);
  }
  if (!image.height || !image.width) {
    throw new Error("missing images properties");
  }
  const savedImagePath = getSaveImagePath(image) || "";
  const savedImage = checkImagesExist(savedImagePath);
  if (savedImage) {
    return savedImagePath;
  }
  return await sharp(getImagePath(image.fileName || ""))
    .resize(image.width, image.height, {
      fit: "inside",
    })
    .toFile(savedImagePath)
    .then(() => {
      return savedImagePath;
    })
    .catch((err) => {
      throw err;
    });
};
