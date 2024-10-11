//import React from 'react';

function RecoverMod() {
   /* const verificarContraseña = () => {
        const contraseña = document.getElementById('contraseña').value;
        const rcontraseña = document.getElementById('rcontraseña').value;

        if (contraseña === rcontraseña) {
            alert("Las contraseñas coinciden.");
            // Aquí puedes agregar más lógica para manejar el caso de éxito
        } else {
            alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        }
    };*/
    return (
        <div>
        <div>
            <h1>Plataforma Genómica</h1>

            <h3>Recuperar Contraseña</h3>
        </div>

        <section className={'section'}>
        <div className={'target'}>

        <h3>Crear Contraseña</h3>
        <input id = "contraseña" type="text" className={'private'}></input>

        <h3>Repetir Contraseña</h3>
        <input id = "rcontraseña" type="text" className={'private'} ></input>


        <button className={'button'} onClick={() => RecoverMod()}>Verificar</button>

        </div>
        </section>          
        </div>
    );
}

export default RecoverMod;