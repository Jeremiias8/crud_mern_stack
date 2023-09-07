import React, { useEffect, useState } from 'react';

import UsuarioIndividual from './UsuarioIndividual';
import axios from 'axios';

function ListaUsuario() {

    const[dataUsuarios, setDataUsuarios] = useState([]);

    useEffect(() => {

        axios.get('api/usuario/obtener-usuario')
            .then(res => {
                console.log(res.data);
                setDataUsuarios(res.data);
            })
            .catch(err => {
                console.log(err);
            })
       
    }, [])

    // mapear lista de users en obj user
    const listausuarios = dataUsuarios.map(usuario => {
        return(
            <>
                <div>
                    <UsuarioIndividual usuario={usuario} />
                </div>
            </>
        )
    })

    return(
        <div>
            <h2>Lista de usuarios</h2>

            {listausuarios}
        </div>
    );
}

export default ListaUsuario