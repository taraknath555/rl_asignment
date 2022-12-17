const fs = require("fs");
const readData = require("../utils/readData");

//Bussiness Logics will go here in model
exports.getMagazines = async (req) => {
  let magazinesDataWithAuthor;
  const magazinesData = JSON.parse(await readData("magazines.json"));
  const authorsData = JSON.parse(await readData("authors.json"));

  magazinesDataWithAuthor = magazinesData.map((m) => {
    return {
      ...m,
      authors: authorsData.filter((au) => au.email === m.authors)[0],
    };
  });

  if (req.query.author) {
    magazinesDataWithAuthor = magazinesDataWithAuthor.filter(
      (md) => md.authors.email === req.query.author
    );
  }

  if (req.query.isbn) {
    magazinesDataWithAuthor = magazinesDataWithAuthor.filter(
      (md) => md.isbn === req.query.isbn
    );
  }

  return magazinesDataWithAuthor;
};
