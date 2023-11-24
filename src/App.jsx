import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about.jsx";
import Layout from "./components/Layout";
import Skills from "./components/Skills";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout transparentBackground={true} />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
