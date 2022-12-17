const fs = require("fs");

module.exports = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${filename}`, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
