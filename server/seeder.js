const fs = require("fs");
const csv = require("csv-parser");

module.exports = () => {
  const seedFiles = ["books", "authors", "magazines"];

  seedFiles.forEach((file) => {
    if (fs.existsSync(`./data/${file}.json`)) return;

    const fileData = [];
    fs.createReadStream(`public/files/${file}.csv`)
      .pipe(csv())
      .on("data", (row) => {
        const valuesArr = Object.values(row)[0].split(";");
        const keysArr = Object.keys(row)[0].split(";");
        const rowObj = {};

        keysArr.forEach((k, idx) => {
          rowObj[k.trim()] = valuesArr[idx];
        });

        fileData.push(rowObj);
      })
      .on("end", () => {
        fs.writeFile(`./data/${file}.json`, JSON.stringify(fileData), (err) => {
          if (err) console.log(err);
          console.log("file written");
        });
      });
  });
};
