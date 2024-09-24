import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";

function Aboutus() {
    const navigate = useNavigate();

    return(
        <>
        <header>
            <Navbar/>
        </header>
        
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <div>
            <p>About us</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Aboutus;
