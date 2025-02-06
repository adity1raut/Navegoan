import React from 'react'
import Homepage from './pages/Homepage'
import Content from './components/Content'
import MainGallery from './components/MainGallery'
import Map from './components/Map'
function Combo() {
  return (
    <div>
        <Homepage />
        <Content />
        <MainGallery />
        <Map />
    </div>
  )
}

export default Combo ;
