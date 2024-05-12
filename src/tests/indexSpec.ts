import app from "../index";
import supertest from "supertest";
import { getImage } from "../routes/api/images/service/imagesService";
import { ImageQueryParams } from "../routes/api/images/interface/imageQueryParams";

const request = supertest(app);

describe("Image processing REST API", function () {
  describe("GET /api/images", function () {
    it("Gets the test endpoint without file name", async () => {
      const response = await request.get("/api/images");
      expect(response.status).toBe(400);
      expect(response.text).toBe("Missing file name!");
    });

    it("Gets the test endpoint without filename", async () => {
      const response = await request.get("/api/images?filename=fjord");
      expect(response.status).toBe(200);
    });
  });

  describe("Test functional", function () {
    it("Test converting file ", async () => {
      const image: ImageQueryParams = {
        fileName: "fjord",
        width: 50,
        height: 50,
      };
      const imagePath = await getImage(image);
      expect(imagePath).toContain("fjordw50h50.jpg");
    });
  });
});
