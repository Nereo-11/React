import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiUsers } from "../services/apiUsers";
import './signup.css';

function Signup() {
    const navigate = useNavigate();
    const userAPI = new apiUsers();
/*
    interface User {
        name: string,
        email: string,
        password: string, 
        rpassword: string
    }
*/
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rpassword, setRpassword] = useState<string>('');
    const handleName = (result: React.ChangeEvent<HTMLInputElement>): void => {
        setName(result.target.value)
    }
    const handleEmail = (result: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(result.target.value)
    }
    const handlePassword = (result: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(result.target.value)
    }
    const handleRpassword = (result: React.ChangeEvent<HTMLInputElement>): void => {
        setRpassword(result.target.value)
    }
    function addUser () {
        userAPI.createUser(email, password)
        .then((result) => {
            if (result){
                userAPI.updateUser(name, "https://")
                .then((result) => {
                    if(result) {
                        userAPI.sendUserEmailVerification()
                        .then((result) => {
                            if(result) 
                            navigate('/Home')  
                        })
                        .catch((_error) => {
                            alert("Error, por favor intenta de nuevo")
                        })
                    }
                })
                .catch((_error) => {
                        alert("Erorr añadiendo, favor de contactar con soporte tecnico")
                })
            }
        })
        .catch((_error) => {
            alert("Error al crear usuraio, intenta nuevamente")
        });
    }

    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <section className={'section'}>
          <div className={'target'}>
              <h3>Nombre</h3>
              <input id = "name" type="text" className={'public'} value={name} onChange={handleName}></input>

              <h3>Correo</h3>
              <input id = "email" type="email" className={'public'} pattern=".+@example\.com" value={email} onChange={handleEmail} required></input>

              <h3>Crear Contraseña</h3>
              <input id = "contraseña" type="text" className={'private'} value={password} onChange={handlePassword}></input>

              <h3>Repetir Contraseña</h3>

              <input id = "rcontraseña" type="text" className={'private'} value={rpassword} onChange={handleRpassword}></input>

              <button onClick={() => addUser()}>Registrarse</button>
          </div>
        </section>

        <div>
            <p>¿Tienes cuenta? <Link to="/login">Inicia sesion aqui</Link></p>
        </div>
        
        </>
    )
}

export default Signup;
