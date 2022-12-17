import React, { useState, useEffect } from "react";
import axios from "axios";
import keys from "../config.js/keys";
import Content from "../components/Content";

const bookUrl = keys.server + "/api/v1/books/show";
const magazineUrl = keys.server + "/api/v1/magazines/show";
const BookAndMagazine = () => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (targetFind = "", inputValue = "") => {
    setNoData(false);
    const finalBookUrl =
      inputValue && targetFind
        ? `${bookUrl}?${targetFind}=${inputValue}`
        : bookUrl;

    const finalMagazineUrl =
      inputValue && targetFind
        ? `${magazineUrl}?${targetFind}=${inputValue}`
        : magazineUrl;
    const { data: booksData } = await axios.get(finalBookUrl);
    const { data: magazinesData } = await axios.get(finalMagazineUrl);

    if (!(booksData.results + magazinesData.results)) setNoData(true);
    setData([...booksData.books, ...magazinesData.magazines]);
  };

  return (
    <Content
      data={data}
      setData={setData}
      fetchCallback={fetchData}
      dataName="magbooks"
      noData={noData}
    />
  );
};

export default BookAndMagazine;
