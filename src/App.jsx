import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate.jsx";
import Proyect from "./components/Proyect.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  const location = useLocation();
  const [transparentBackground, setTransparentBackground] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setTransparentBackground(true);
    } else {
      setTransparentBackground(false);
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='certificate' element={<Certificate />} />
        <Route path='proyect' element={<Proyect />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer transparentBackground={transparentBackground} />
    </div>
  );
};

export default App;
