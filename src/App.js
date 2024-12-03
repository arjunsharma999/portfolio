import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import About from "./Components/About";
import MyWork from "./Components/Mywork";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />

        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
