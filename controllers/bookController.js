const bookModel = require("../models/bookModel");

exports.getBooks = async (req, res, next) => {
  bookModel
    .getBooks(req)
    .then((books) => {
      res.status(200).json({
        status: "success",
        results: books.length,
        books,
      });
    })
    .catch(next);
};
