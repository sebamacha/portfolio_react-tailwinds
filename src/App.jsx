import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate.jsx";
import Proyect from "./components/Proyect.jsx";
import Contact from "./components/contact.jsx";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`${isHome ? "bg-transparent" : "bg-gray-200"}`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='certificate' element={<Certificate />} />
        <Route path='proyect' element={<Proyect />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer transparentBackground={isHome} />
    </div>
  );
};

export default App;
