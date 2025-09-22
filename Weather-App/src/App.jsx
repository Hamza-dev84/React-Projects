
import React, { useState } from 'react'
import Weather from './Components/Weather'
import './App.css'
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? 'app dark' : 'app'}>

      <nav className="navbar">
        <h2 className="logo">Weather App</h2>
        <button className="toggleBtn" onClick={toggleTheme}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </nav>


      <div className="body">

        <Weather darkMode={darkMode} />

      </div>
    </div>
  )
}

export default App
