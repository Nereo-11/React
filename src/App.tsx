//import { useState } from 'react'
import './App.css'
import Login from "./Componentes/login"

function App() {

  return (
    <>
      <div>
        <a  target="_blank">
          <img src="https://www.pngall.com/wp-content/uploads/11/DNA-Genetic-PNG-Photos.png" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Plataforma Genómica </h1>

      <div className="card">
        <button onClick={() => <Login/>}> Registrarse </button>
        <button onClick={() => <Login/>}> Iniciar Sesion</button>
      </div>
      <p className="read-the-docs">
        Universidad De Colima @2024
      </p>
    </>
  )
}

export default App