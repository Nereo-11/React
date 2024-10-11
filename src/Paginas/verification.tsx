import { useNavigate } from "react-router-dom";
import './verification.css';

function Verification() {
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h1>Plataforma Genómica</h1>

            <h3>Estamos validando tu correo</h3>
        </div>

        <section className={'section'}>
        <div className={'target'}>

        <h3>Ingresa el codigo enviado a tu correo</h3>
            <input id = "code" type="text" className={'public'}></input>


        <button className={'button'} onClick={() => Verification()}>Verificar</button>
        <p>¿Tienes cuenta? Registrate <a onClick={() => navigate('/login')}>aqui</a></p>

        </div>
        </section>
        </>
    )
}

export default Verification;