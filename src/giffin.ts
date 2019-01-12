import * as fs from "fs";
// import * as sizeOf from "image-size";

const GIFEncoder = require("gifencoder");
const pngFileStream = require("png-file-stream");

const prefixes = new Map<string, number>();
const baseFolder = "screenshots";

export const addFrame = (prefix = "default") => {
  let index = 0;
  if (prefixes.has(prefix)) {
    index = prefixes.get(prefix) + 1;
  }
  prefixes.set(prefix, index);
  browser.saveScreenshot(`${baseFolder}/${prefix}${index}.png`);
  // $(selector).saveScreenshot(filename)
};

const getMaxImageWidth = (prefix = "default") => {
  // const numberOfScreenshots = prefixes.get(prefix) + 1;
  // const dimensions = sizeOf(`${baseFolder}/${prefix}0.png`);
  // console.log("DIMENSIONS", dimensions.width, dimensions.height);
  // const encoder = new GIFEncoder(dimensions.width, dimensions.height);
  return 2560;
};

const getMaxImageHeight = (prefix = "default") => {
  return 748;
};

export const createGif = async (prefix = "default") => {
  const encoder = new GIFEncoder(getMaxImageWidth(prefix), getMaxImageHeight(prefix));

  const stream = pngFileStream("screenshots/**/default?.png")
    .pipe(encoder.createWriteStream({ repeat: 0, delay: 500, quality: 10 }))
    .pipe(fs.createWriteStream(`${baseFolder}/${prefix}.gif`));

  await new Promise((resolve, reject) => {
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
};
