//import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Home from "./Paginas/home"
import Login from "./Paginas/login"
import Signup from "./Paginas/signup"
import Repository from "./Paginas/repository"
import Account from "./Paginas/account"
import Aboutus from "./Paginas/aboutus"
import RecoverPassword from './Paginas/recoverPassword'
import { auth, analytics } from './config/firebase';
import PrivateRoute from './components/PrivateRoute/privateRoute';
import Verification from './Paginas/verification';
import RecoverPass from './Paginas/recoverpass';


function App() {
  const navigate = useNavigate();
  // @ts-ignore
  const auths = auth;
  // @ts-ignore
  const analytic = analytics;

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
        <Route path="/" element={<App />} />
        <Route path="/home" element={<PrivateRoute> <Home/> </PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/repository" element={<PrivateRoute> <Repository/> </PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute> <Account/> </PrivateRoute>} />
        <Route path="/aboutus" element={<PrivateRoute> <Aboutus/> </PrivateRoute>} />
        <Route path='/recoverPassword' element={<RecoverPassword/>} />
      </Routes>
    </Router>
  );
}

//export default App