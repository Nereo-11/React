//import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Home from "./Paginas/home"
import Repository from "./Paginas/repository"
import Aboutus from "./Paginas/aboutus"


function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a  target="_blank">
          <img src="https://www.pngall.com/wp-content/uploads/11/DNA-Genetic-PNG-Photos.png" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Plataforma Genómica </h1>

      <div className="card">
        <button onClick={() => navigate('/signup')}> Registrarse </button>
        <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        <button onClick={() => navigate('/repository')}>Repository</button>
        <button onClick={() => navigate('/account')}>Account</button>
        <button onClick={() => navigate('/aboutus')}>About Us</button>
      </div>
      <p className="read-the-docs">
        Universidad De Colima @2024
      </p>
    </>
  )
}

export default function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/repository" element={ <Repository/>} />
        <Route path="/aboutus" element={ <Aboutus/>} />
      </Routes>
    </Router>
  );
}

//export default App