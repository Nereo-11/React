import { useNavigate } from "react-router-dom";
import './signup.css';

function Signup() {
    const navigate = useNavigate();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("contraseña");
    let rpass = document.getElementById("rcontraseña");


    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <section className={'section'}>
        <div className={'target'}>
            <h3>Nombre</h3>
            <input id = "name" type="text" className={'public'}></input>

            <h3>Correo</h3>
            <input id = "email" type="email" className={'public'} pattern=".+@example\.com" required></input>

            <h3>Crear Contraseña</h3>
            <input id = "contraseña" type="text" className={'private'}></input>

            <h3>Repetir Contraseña</h3>
            <input id = "rcontraseña" type="text" className={'private'} ></input>

            <button className={'button'} onClick={() => Signup()}>Aceptar</button>
            <p>¿Tienes cuenta? Inicia Sesion <a onClick={() => navigate('/login')}>aqui</a></p>
        </div>
        </section>


        <div>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>
        

        </>
    )
}

export default Signup;
