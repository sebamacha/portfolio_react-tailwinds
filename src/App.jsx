import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import Proyect from "./components/Proyect";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificate />
      <Proyect />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
