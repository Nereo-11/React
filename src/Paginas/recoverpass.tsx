import { useNavigate } from "react-router-dom";
import './verification.css';
import RecoverMod from "../components/recovermod.tsx";

function RecoverPass() {
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>

            <h3>Recuperar Contraseña</h3>
        </div>

        <section className={'section'}>
        <div className={'target'}>

        <h3>Ingresa tu correo</h3>
        <input id = "email" type="email" className={'public'} pattern=".+@example\.com" required></input>


        <button className={'button'} onClick={() => RecoverPass()}>Verificar</button>
        <p>¿Tienes cuenta? Inicia Sesion <a onClick={() => navigate('/login')}>aqui</a></p>

        </div>
        </section>
        </>
    )
}

export default RecoverPass;