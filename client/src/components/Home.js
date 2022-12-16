import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="https://cdn.pixabay.com/photo/2015/06/11/17/52/magazine-806073_960_720.jpg"
        alt=""
      />
      <Button variant="success" onClick={() => navigate("/books")}>
        Show Books
      </Button>
      <Button variant="success" onClick={() => navigate("/magazines")}>
        Show Magazines
      </Button>
      <Button variant="success" onClick={() => navigate("/mag-book")}>
        Show Mag/Books
      </Button>
    </>
  );
};

export default Home;
