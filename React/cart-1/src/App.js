import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Faq } from "./Components/Faq";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
