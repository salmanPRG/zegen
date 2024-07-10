import React from 'react'
import "./Main.css"
import { CgCross } from "react-icons/cg";


const Main = () => {
  return (
    <div className="gallery-container">
        <div className="info4">
          <p>
            Home -<span> Gallery</span>
          </p>
        </div>
        <h1>Gallery</h1>
        <div className="cross1">
          <div className="cross2">
            <CgCross />
          </div>
        </div>
      </div>
  )
}

export default Main;