import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <ListGroup />
      
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
