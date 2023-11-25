import React from "react";
import { Routes, Route } from "react-router-dom/";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Layout from "./components/Layout";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate.jsx";

// ...

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout transparentBackground={true} />}>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='certificate' element={<Certificate />} />
      </Route>
    </Routes>
  );
};

export default App;
