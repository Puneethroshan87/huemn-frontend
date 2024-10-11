import logo from "./logo.svg";
import "./App.css";
import Home from "./HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BookNow from "./Pages/BookNow";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/book-now" element={<BookNow />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
