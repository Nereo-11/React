import { json, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import './repository.css';
import { useState } from "react";


function Repository() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    async function searchKey (key : string) {
        const response = await fetch(`http://127.0.0.1:8000/search-api/?key=${key}`); // Cambia esta URL por la de tu API
        const result = await response.json();
        const a = JSON.parse(result)
        setData(a);
    }


    return(
        <>
        <header>
            <Navbar/>
        </header>

        <div>
            <h1>Plataforma Genómica</h1>
        </div>

        <body>
        <section className={'section'}>
        <div className={'search'}>

            <input id = "busqueda" type="text" className={'public'}></input>

        </div>
        </section>

        <section className={'section-left'}>
        <div className={'target-l'}>
        <button onClick={() => searchKey('human')}>
        <h4>Humanos</h4>
        </button>
        </div>
        <div className={'target-l'}>
        <button onClick={() => searchKey('animal')}>
        <h4>Animales</h4>
        </button >
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
        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Organismo</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: { nombre: string; especie: string; descarga: string }, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.especie}</td>
              <td>{item.descarga}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
        </body>

        <div>
            <p>Repository</p>
            <button onClick={() => navigate('/home')}>Home</button>
            <button onClick={() => navigate('/')}>App</button>
        </div>

        </>
    )
}

export default Repository;
