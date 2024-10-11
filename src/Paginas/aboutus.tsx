import Navbar from "../components/Navbar/Navbar.tsx";
import './aboutus.css';

function Aboutus() {

    return(
        <>
        <header>
            <Navbar/>
        </header>
        
        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <div className={'container'}>
            <p >About us</p>
        </div>

        </>
    )
}

export default Aboutus;
