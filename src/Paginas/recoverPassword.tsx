import { Link} from "react-router-dom";
import { apiUsers } from "../services/apiUsers";
import React, { useState } from "react";
function RecoverPassword () {
    const userAPI = new apiUsers();
    const [email, setEmail] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
    }

    function sendEmailForPassword(){
        userAPI.sendEmailChangePassword(email)
        .then((_result) => {
            setEmail('')
            alert("Correo enviado correctamente")
        })
        .catch((_error) => {
            alert("Error al enviar correo, intenta nuevamente")
        })
    }
    return (
        <>
        <h1>Recuperar contraseña</h1>

        <label>Ingresa tu correo: </label>
        <input type="email" value={email} onChange={handleEmail}></input>

        <button onClick={() => sendEmailForPassword()}>Verificar</button>

        <div>
            <p>¿Tienes cuenta? <Link to="/login">Inicia sesion aqui</Link></p>
        </div>
        </>
    )
}

export default RecoverPassword;