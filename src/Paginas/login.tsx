import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return(
        <>
        <div>
            <h1>Plataforma Genomica</h1>
        </div>

        <div>
            <p>Login</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Login;