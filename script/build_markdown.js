/** @format */

const fs = require("fs/promises");
const path = require("path");
const remark = require("remark");
const html = require("remark-html");
//IIFE
(async function () {
  const targetPath = path.normalize(process.argv[2]);
  try {
    if (targetPath) {
      const mdFile = await fs.readFile(
        targetPath,
        "utf8",
        function (err, data) {
          return data;
        }
      );
      const remakred = await remark().use(html).process(mdFile);
      const distPath = path.normalize("dist/hello.html");
      fs.writeFile(distPath, remakred.contents, "utf8", function (err) {
        console.log(err);
      });
    }
  } catch (error) {
    throw error;
  }
})();
