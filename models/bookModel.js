const fs = require("fs");
const readData = require("../utils/readData");

exports.getBooks = async (req) => {
  let booksDataWithAuthor;
  const booksData = JSON.parse(await readData("books.json"));
  const authorsData = JSON.parse(await readData("authors.json"));

  booksDataWithAuthor = booksData.map((b) => {
    return {
      ...b,
      authors: authorsData.filter((au) => au.email === b.authors)[0],
    };
  });

  if (req.query.author) {
    booksDataWithAuthor = booksDataWithAuthor.filter(
      (bd) => bd.authors.email === req.query.author
    );
  }

  if (req.query.isbn) {
    booksDataWithAuthor = booksDataWithAuthor.filter(
      (bd) => bd.isbn === req.query.isbn
    );
  }
  return booksDataWithAuthor;
};
