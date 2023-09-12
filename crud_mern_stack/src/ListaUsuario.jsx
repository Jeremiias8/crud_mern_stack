import React, { useEffect, useState } from 'react';

import UsuarioIndividual from './UsuarioIndividual';
// import axios from 'axios';

function ListaUsuario() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    /*
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
       
    }, []) */


    /*
    // mapear lista de users en obj user
    const listausuarios = dataUsuarios.map(usuario => {
        return(
            <>
                <div>
                    <UsuarioIndividual usuario={usuario} />
                </div>
            </>
        )
    }) */

    

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.id} {item.title}
                    </li>
                ))}
                <li>
                    <UsuarioIndividual />
                </li>
            </ul>
        );
    }
}

export default ListaUsuario