import { ParsedQs } from "qs";

export interface IImageQueryParams {
  fileName?: string;
  width?: number;
  height?: number;
}

export class ImageQueryParams implements IImageQueryParams {
  fileName?: string;
  height?: number;
  width?: number;

  constructor(query: ParsedQs) {
    this.fileName = query.filename as string;
    this.width = parseInt(query.width as string);
    this.height = parseInt(query.height as string);
  }
}
