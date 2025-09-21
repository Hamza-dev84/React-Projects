// import React from 'react'
// import Weather from './Components/Weather'
// import './App.css'
// function App() {
//   return (
//     <div className='body'>
//      <Weather />
//       </div>
//   )
// }

// export default App


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
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Weather App</h2>
        <button className="toggleBtn" onClick={toggleTheme}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </nav>

      {/* Weather Card */}
      <div className="body">
        {/* <Weather /> */}
        <Weather darkMode={darkMode} />

      </div>
    </div>
  )
}

export default App
