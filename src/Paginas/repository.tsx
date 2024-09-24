import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import './repository.css';

function Repository() {
    const navigate = useNavigate();

    return(
        <>
        <header>
            <Navbar/>
        </header>

        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <section className={'section'}>
        <div className={'search'}>

            <input id = "busqueda" type="text" className={'public'}></input>

        </div>
        </section>

        <section className={'section-left'}>
        <div className={'target-l'}>
        <button>
        <h4>Humanos</h4>
        </button>
        </div>
        <div className={'target-l'}>
        <button>
        <h4>Animales</h4>
        </button>
        </div>
        <div className={'target-l'}>
        <button>
        <h4>Animales</h4>
        </button>
        </div>
        </section>

        <section className={'section-right'}>
        <div className={'target'}>
        
        </div>
        </section>

        <div>
            <p>Repository</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Repository;
