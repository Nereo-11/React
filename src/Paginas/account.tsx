import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.tsx";
import { apiUsers } from "../services/apiUsers.tsx";

function Account() {
    const navigate = useNavigate();
    const userAPI: apiUsers = new apiUsers();
    const user = userAPI.getUser();
    if(!user){ 
        alert("Error por favor intente de nuevo")
    }

    return(
        <>
        <header>
            <Navbar/>
        </header>

        <div>
            <h1>Plataforma Genomica</h1>
        </div>

        <div>
            <label htmlFor="user">Nombre de usuario: </label>
            <input type="text" id="user" value={user?.displayName? user.displayName : ''} disabled></input>
            <button>Editar</button>
            <br/>
            <label htmlFor="email">Correo: </label>
            <input type="text" id="email" value={user?.email? user.email: ''} disabled></input>
            <button>Editar</button>
            <br/>
            <label htmlFor="password">Contraseña: </label>
            <input type="text" id="password" value={'*************'} disabled></input>
            <button>Editar</button>
        </div>

        </>
    )
}

export default Account;
