import { useNavigate } from "react-router-dom";
import './signup.css';

function Login() {
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <section className={'section'}>
        <div className={'target'}>

        <h3>Correo</h3>
            <input id = "email" type="email" className={'public'} pattern=".+@example\.com" required></input>

        <h3>Crear Contraseña</h3>
            <input id = "contraseña" type="text" className={'private'}></input>

        <a onClick={() => navigate('/signup')}>Recuperar Contraseña</a>

        </div>
        </section>

        <div>
            
            <button onClick={() => navigate('/home')}>Home</button>
            <p>¿No tienes cuenta? Registrate <a onClick={() => navigate('/signup')}>aqui</a></p>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Login;