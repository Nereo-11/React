import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";

function Home() {
    const navigate = useNavigate();


    
    return(
        <>  
        <header>
            <Navbar/>
        </header>

        <section>
            <img src="https://th.bing.com/th/id/OIP.uwrMe5k-OsdGk9US2MUlSAHaE8?rs=1&pid=ImgDetMain" /> 
            <h3>Informacion sobre la pagina</h3>
            <p>
                Descubra nuestra plataforma de búsqueda de datos genómicos, diseñada para facilitar el acceso y análisis de vastos conjuntos de datos genéticos. Con una interfaz intuitiva y herramientas de búsqueda avanzadas, podrá explorar, filtrar y visualizar información genética de manera rápida y eficiente
            </p>   
        </section>   

        </>
    )
}

export default Home;
