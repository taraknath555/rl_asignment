import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "../pages/Books";
import Magazines from "../pages/Magazines";
import Home from "../pages/Home/Home";
import BookAndMagazine from "../pages/BookAndMagazine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/mag-book" element={<BookAndMagazine />} />
      </Routes>
    </Router>
  );
};

export default App;
