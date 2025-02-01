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
          <Route path="/" element={<Combo />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/hotels" element={<Hotels />} /> {/* Hotels Page */}
          <Route path="/booking" element={<Booking />} /> {/* Booking Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;