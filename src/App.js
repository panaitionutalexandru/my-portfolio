import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route /*Link*/,
} from "react-router-dom";
import { Homepage, About, Work, Contact } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
