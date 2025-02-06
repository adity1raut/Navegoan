import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Fotter";
import Contact from "./pages/Contact";
import Hotels from "./pages/Hotels";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Combo from "./Combo";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Combo />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/hotels" element={<Hotels />} /> 
          <Route path="/booking" element={<Booking />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;