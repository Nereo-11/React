import { useNavigate } from "react-router-dom";
import { apiUsers } from "../services/apiUsers";
import React, { useState } from "react";
function RecoverPassword () {
    const navigate = useNavigate();
    const userAPI = new apiUsers();
    const [email, setEmail] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
    }

    function sendEmailForPassword(){
        userAPI.sendEmailChangePassword(email)
    }
    return (
        <>
        <h1>Recuperar contraseña</h1>

        <label>Ingresa tu correo: </label>
        <input type="email" value={email} onChange={handleEmail}></input>

        <button onClick={() => sendEmailForPassword()}>Verificar</button>

        <div>
            <p>¿Tienes cuenta? Inicia Sesion <a onClick={() => navigate('/login')}>aqui</a></p>
        </div>
        </>
    )
}

export default RecoverPassword;