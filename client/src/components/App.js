import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Books";
import Magazines from "./Magazines";
import Home from "./Home";
import BookAndMagazine from "./BookAndMagazine";

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
