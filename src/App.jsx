import React from 'react'
import Homepage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import MainGallery from "./components/MainGallery"
import Map from "./components/Map"
import Footer from "./components/Fotter"
function App() {
  return (
    <>
      <div className='min-h-screen'>
        <Navbar />
        <Homepage />
        <Content />
        <MainGallery />
        <Map />
        <Footer />
      </div>
    </>
  )
}

export default App
