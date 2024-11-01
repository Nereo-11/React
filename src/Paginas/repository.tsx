import Navbar from "../components/Navbar/Navbar.tsx";
import './repository.css';
import { useEffect, useState } from "react";


function Repository() {
    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');


    async function searchKey (key : string) {
        const response = await fetch(`http://127.0.0.1:8000/search-api/?key=${key}`); // Cambia esta URL por la de tu API
        const result = await response.json();
        const a = JSON.parse(result)
        setData(a);
        console.log("paso por aqui")
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(event.target.value); // Actualiza el estado con el nuevo valor del input
    };

    const search = ()=> {
      setData([]);
      searchKey(keyword)
    };

    const categories = (a: string) => {
      setData([]);
      setKeyword('');
      searchKey(a)
    }

    useEffect(() => {
        searchKey('human');       
    }, []);


    return(
        <>
        <header>
            <Navbar/>
        </header>

        {data.length != 0 ?
        
        <div>

          <div className={'div-left'}>
            <button onClick={() => categories('human')} className={'target-l'}>
              <h4>Humanos</h4>
            </button>
            <button onClick={() => categories('animal')} className={'target-l'}>
              <h4>Animales</h4>
            </button >
            <button onClick={() => categories('planta')} className={'target-l'}>
              <h4>Plantas</h4>
            </button>
          </div>

          <div className={"wrapper"}>
          <label htmlFor="busqueda">Busqueda: </label>
          <div className={'search'}>
              <input id = "busqueda" type="text" className={'public'} value={keyword} onChange={handleInputChange}></input>
          </div>
            <button onClick={search}>Buscar</button>
          </div>

          <div className={'table'}>
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
                    <td> <a href={item.descarga} target="_blank" rel="noopener noreferrer">Download</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        : <p>Cargando resultados... por favor espere. </p>}

        </>
    )
}

export default Repository;
