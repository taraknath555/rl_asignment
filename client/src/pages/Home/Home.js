import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import { useNavigate } from "react-router";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="btngrp">
          <div className="divbtn">
            <button
              className="butto"
              variant="success"
              onClick={() => navigate("/books")}
            >
              Show Books
            </button>
          </div>
          <div className="divbtn">
            <button
              className="butto"
              variant="success"
              onClick={() => navigate("/magazines")}
            >
              Show Magazines
            </button>
          </div>
          <div className="divbtn">
            <button
              className="butto"
              variant="success"
              onClick={() => navigate("/mag-book")}
            >
              Show Mag/Books
            </button>
          </div>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/06/11/17/52/magazine-806073_960_720.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
