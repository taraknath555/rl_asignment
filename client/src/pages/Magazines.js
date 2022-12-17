import React, { useState, useEffect } from "react";
import axios from "axios";
import keys from "../config.js/keys";
import Content from "../components/Content";

const Megazines = () => {
  const [megazines, setMegazines] = useState([]);
  const [noData, setNoData] = useState(false);

  const url = keys.server + "/api/v1/magazines/show";

  useEffect(() => {
    fetchMegazines();
  }, []);
  const fetchMegazines = async (targetFind = "", inputValue = "") => {
    setNoData(false);
    const finalUrl =
      inputValue && targetFind ? `${url}?${targetFind}=${inputValue}` : url;
    const { data } = await axios.get(finalUrl);
    if (!data.results) setNoData(true);
    setMegazines(data.magazines);
  };

  return (
    <Content
      data={megazines}
      setData={setMegazines}
      fetchCallback={fetchMegazines}
      dataName="megazines"
      noData={noData}
    />
  );
};

export default Megazines;
