import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";

function Repository() {
    const navigate = useNavigate();

    return(
        <>
        <header>
            <Navbar/>
        </header>

        <div>
            <h1>Plataforma Genomica</h1>
        </div>

        <div>
            <p>Repository</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Repository;
