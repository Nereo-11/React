import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
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
        userAPI.sigInUser(email, password)
        .then((result) => {
            if (result) {
              navigate('/Home')
            }
          })
        .catch((_error) => {
            alert("Erorr al iniciar sesion, verifica el correo o la contraseña.")
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

        <br/><br/>
        <Link to="/recoverPassword">Recuperar Contraseña</Link>
        <br/><br/>

        <button onClick={loginAuth}>Iniciar sesión</button>

        <br/><br/><br/>

        <p>¿No tienes cuenta? <Link to="/signup">Registrate aqui</Link></p>

        </div>
        </section>

        </>
    )
}

export default Login;