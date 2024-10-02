import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './signup.css';
import {apiUsers} from "../services/apiUsers";

function Login() {
    const navigate = useNavigate();
    const userAPI: apiUsers = new apiUsers();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
    }
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value)
    }
    
    function loginAuth () {
        userAPI.sigInUser(email, password).then((result) => {
            if (result) {
              console.log("Inicio de sesión exitoso");
              navigate('/Home')
            } else {
              console.log("Error al iniciar sesión");
            }
          });
    }

    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <section className={'section'}>
        <div className={'target'}>

        <h3>Correo</h3>
            <input id = "email" type="email" className={'public'} pattern=".+@example\.com" value={email} onChange={handleEmail} required></input>

        <h3>Crear Contraseña</h3>
            <input id = "contraseña" type="text" className={'private'} value={password} onChange={handlePassword} required></input>

        <a onClick={() => navigate('/signup')}>Recuperar Contraseña</a>

        <button onClick={loginAuth}>Iniciar sesión</button>

        <p>¿No tienes cuenta? Registrate <a onClick={() => navigate('/signup')}>aqui</a></p>

        </div>
        </section>

        </>
    )
}

export default Login;