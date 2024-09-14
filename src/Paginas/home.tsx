import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";

function Home() {
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
            <p>Home</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Home;
