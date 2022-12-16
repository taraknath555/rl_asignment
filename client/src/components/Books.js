import React, { useState, useEffect } from "react";
import axios from "axios";
import keys from "../config.js/keys";
import "./books.css";
import Content from "./Content";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [noData, setNoData] = useState(false);

  const url = keys.server + "/api/v1/books/show";

  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async (targetFind = "", inputValue = "") => {
    const finalUrl =
      inputValue && targetFind ? `${url}?${targetFind}=${inputValue}` : url;
    const { data } = await axios.get(finalUrl);
    if (!data.results) setNoData(true);
    setBooks(data.books);
  };

  return (
    <Content
      data={books}
      fetchCallback={fetchBooks}
      dataName="books"
      noData={noData}
    />
  );
};

export default Books;
